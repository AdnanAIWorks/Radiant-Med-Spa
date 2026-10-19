param(
    [int]$Port = 8080,
    [string]$Path = $PSScriptRoot
)

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$Port/"
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
    Write-Host "RADIANT MED SPA - HOUSTON, TX" -ForegroundColor Cyan
    Write-Host "Local Web Server Running at: $prefix" -ForegroundColor Yellow

    $mimeTypes = @{
        ".html" = "text/html; charset=utf-8"
        ".htm"  = "text/html; charset=utf-8"
        ".css"  = "text/css; charset=utf-8"
        ".js"   = "application/javascript; charset=utf-8"
        ".json" = "application/json; charset=utf-8"
        ".png"  = "image/png"
        ".jpg"  = "image/jpeg"
        ".jpeg" = "image/jpeg"
        ".webp" = "image/webp"
        ".svg"  = "image/svg+xml"
        ".ico"  = "image/x-icon"
        ".xml"  = "application/xml; charset=utf-8"
        ".txt"  = "text/plain; charset=utf-8"
    }

    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response

            $rawUrl = $request.Url.LocalPath.TrimStart('/')
            if ([string]::IsNullOrWhiteSpace($rawUrl) -or $rawUrl -eq '/') {
                $rawUrl = "index.html"
            }
            if ($rawUrl -eq "favicon.ico") {
                $rawUrl = "favicon.svg"
            }

            $filePath = [System.IO.Path]::Combine($Path, $rawUrl.Replace('/', '\'))

            if (-not (Test-Path $filePath) -and (Test-Path "$filePath.html")) {
                $filePath = "$filePath.html"
            }

            if (Test-Path -Path $filePath -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }

                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                $response.ContentType = $contentType
                $response.ContentLength64 = $bytes.Length
                $response.StatusCode = 200
                $response.AddHeader("Access-Control-Allow-Origin", "*")
                $response.AddHeader("Cache-Control", "no-cache")

                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($bytes, 0, $bytes.Length)
                }
                Write-Host "200 OK: $($request.Url.LocalPath) ($($request.HttpMethod))" -ForegroundColor Green
            } else {
                $response.StatusCode = 404
                $errMessage = "404 Not Found: " + $rawUrl
                $errBytes = [System.Text.Encoding]::UTF8.GetBytes($errMessage)
                $response.ContentType = "text/plain; charset=utf-8"
                $response.ContentLength64 = $errBytes.Length
                $response.AddHeader("Access-Control-Allow-Origin", "*")

                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
                }
                Write-Host "404 NOT FOUND: $($request.Url.LocalPath)" -ForegroundColor Red
            }

            $response.OutputStream.Close()
        } catch {
            Write-Host "Request error: $_" -ForegroundColor Yellow
            try { $response.OutputStream.Close() } catch {}
        }
    }
}
catch {
    Write-Host "Fatal server error: $_" -ForegroundColor Red
}
finally {
    if ($listener.IsListening) {
        $listener.Stop()
    }
    $listener.Close()
    Write-Host "Server stopped." -ForegroundColor Gray
}

