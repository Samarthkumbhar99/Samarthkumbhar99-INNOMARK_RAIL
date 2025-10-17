# Fix Next.js routing conflict by removing conflicting [data] directory
Write-Host "Fixing Next.js routing conflict..." -ForegroundColor Yellow

$dataDir = "C:\Users\Samarth\Desktop\Innomark_Rail\src\app\view\[data]"

if (Test-Path $dataDir) {
    Write-Host "Removing conflicting [data] directory..." -ForegroundColor Red
    Remove-Item -Path $dataDir -Recurse -Force
    Write-Host "✅ Conflicting [data] directory removed!" -ForegroundColor Green
} else {
    Write-Host "❌ [data] directory not found" -ForegroundColor Red
}

Write-Host "✅ Routing conflict fixed! You can now restart your dev server." -ForegroundColor Green
Write-Host "Run: npm run dev" -ForegroundColor Cyan
