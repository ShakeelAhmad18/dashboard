import React, { useState, useRef } from "react";
import { FiCamera, FiSearch, FiDownload, FiX, FiCheck } from "react-icons/fi";
import StatCard from "../components/StatCard";

const ScanModule = () => {
  const [scanMode, setScanMode] = useState("barcode"); // 'barcode' or 'qr'
  const [scanResult, setScanResult] = useState(null);
  const [scanHistory, setScanHistory] = useState([]);
  const [isScanning, setIsScanning] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Mock scan function (replace with actual scanner implementation)
  const handleScan = () => {
    if (isScanning) return;

    setIsScanning(true);
    setCameraActive(true);

    setTimeout(() => {
      const mockResults = {
        barcode: `BC${Math.floor(100000 + Math.random() * 900000)}`,
        qr: `QR${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(
          1000 + Math.random() * 9000
        )}`,
      };

      const result =
        scanMode === "barcode" ? mockResults.barcode : mockResults.qr;
      const isValid = Math.random() > 0.3;

      setScanResult({
        code: result,
        status: isValid ? "valid" : "invalid",
        product: `Product ${Math.floor(1 + Math.random() * 100)}`,
      });

      setScanHistory((prev) =>
        [
          {
            type: scanMode,
            code: result,
            timestamp: new Date().toLocaleString(),
            product: `Product ${Math.floor(1 + Math.random() * 100)}`,
            status: isValid ? "valid" : "invalid",
          },
          ...prev,
        ].slice(0, 50)
      ); // Keep last 50 scans

      setIsScanning(false);
      setCameraActive(false);
    }, 1500);
  };

  const clearScan = () => {
    setScanResult(null);
    setCameraActive(false);
  };

  const downloadScanHistory = () => {
    // In a real app, this would generate a CSV or PDF
    const csvContent = [
      "Type,Code,Product,Status,Timestamp",
      ...scanHistory.map(
        (scan) =>
          `${scan.type},${scan.code},${scan.product},${scan.status},${scan.timestamp}`
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `scan_history_${new Date().toISOString().slice(0, 10)}.csv`
    );
    link.click();
  };

  return (
    <div className="min-h-screen">
      <div className="scan-module">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Barcode/QR Scanner
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setScanMode("barcode")}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                scanMode === "barcode"
                  ? "bg-blue-100 text-blue-600 border border-blue-200"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Barcode
            </button>
            <button
              onClick={() => setScanMode("qr")}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                scanMode === "qr"
                  ? "bg-blue-100 text-blue-600 border border-blue-200"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              QR Code
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Scanner Panel */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Scanner</h3>
              <p className="text-sm text-gray-500">
                Position the {scanMode} within the frame to scan
              </p>
            </div>

            {/* Scanner Preview */}
            <div className="relative bg-gray-50 rounded-lg h-64 flex items-center justify-center mb-4 border-2 border-dashed border-gray-300">
              {cameraActive ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-black flex items-center justify-center">
                    {/* In a real implementation, this would show camera feed */}
                    <div className="text-center text-white">
                      <div className="animate-pulse flex flex-col items-center">
                        <FiCamera className="text-white" size={48} />
                        <p className="mt-2">Scanning {scanMode}...</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : scanResult ? (
                <div className="text-center p-4 w-full">
                  <div
                    className={`p-4 rounded-lg ${
                      scanResult.status === "valid"
                        ? "bg-green-50 border border-green-200"
                        : "bg-red-50 border border-red-200"
                    }`}
                  >
                    <p className="font-mono text-xl font-bold">
                      {scanResult.code}
                    </p>
                    <div className="flex items-center justify-center mt-2">
                      {scanResult.status === "valid" ? (
                        <FiCheck className="text-green-500 mr-1" />
                      ) : (
                        <FiX className="text-red-500 mr-1" />
                      )}
                      <span
                        className={`text-sm ${
                          scanResult.status === "valid"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {scanResult.status === "valid"
                          ? "Valid scan"
                          : "Invalid scan"}
                      </span>
                    </div>
                    <p className="text-sm mt-2">{scanResult.product}</p>
                  </div>
                  <button
                    onClick={clearScan}
                    className="mt-4 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-sm font-medium"
                  >
                    Scan Again
                  </button>
                </div>
              ) : (
                <div className="text-center p-4">
                  <FiCamera className="text-gray-400 mx-auto" size={48} />
                  <p className="mt-2 text-gray-500">
                    Scanner ready for {scanMode}
                  </p>
                </div>
              )}
              <video ref={videoRef} className="hidden" playsInline />
              <canvas ref={canvasRef} className="hidden" />
            </div>

            <button
              onClick={handleScan}
              disabled={isScanning}
              className={`w-full py-3 rounded-lg font-medium flex items-center justify-center ${
                isScanning
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#14ADD6] to-[#384295] text-white hover:bg-blue-700"
              } transition-colors`}
            >
              <FiSearch className="mr-2" />
              {isScanning ? "Scanning..." : "Start Scanning"}
            </button>
          </div>

          {/* Scan History Panel */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Scan History
                </h3>
                <p className="text-sm text-gray-500">
                  {scanHistory.length} scans recorded
                </p>
              </div>
              <button
                onClick={downloadScanHistory}
                className="p-2 text-gray-500 hover:text-blue-600 rounded-full hover:bg-blue-50"
                title="Download history"
              >
                <FiDownload />
              </button>
            </div>

            {scanHistory.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <FiCamera className="mx-auto mb-2" />
                <p>No scan history yet</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[420px] overflow-y-auto pr-2">
                {scanHistory.map((scan, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      scan.status === "valid"
                        ? "border-green-100 bg-green-50"
                        : "border-red-100 bg-red-50"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-800">
                          {scan.product}
                        </p>
                        <p className="font-mono text-sm text-gray-600">
                          {scan.code}
                        </p>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          scan.status === "valid"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {scan.status}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs mt-2 text-gray-500">
                      <span>{scan.type.toUpperCase()}</span>
                      <span>{scan.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <StatCard
            title="Total Scans"
            value={scanHistory.length}
            trend="today"
            change={
              scanHistory.filter(
                (s) =>
                  new Date(s.timestamp).toDateString() ===
                  new Date().toDateString()
              ).length
            }
          />
          <StatCard
            title="Valid Scans"
            value={scanHistory.filter((s) => s.status === "valid").length}
            trend="rate"
          />
          <StatCard
            title="Today's Scans"
            value={
              scanHistory.filter(
                (s) =>
                  new Date(s.timestamp).toDateString() ===
                  new Date().toDateString()
              ).length
            }
            trend="change"
            change={10} // This would be dynamic in a real app
          />
          <StatCard
            title="Unique Products"
            value={new Set(scanHistory.map((s) => s.product)).size}
            trend="count"
          />
        </div>
      </div>
    </div>
  );
};

export default ScanModule;
