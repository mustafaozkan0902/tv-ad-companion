// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "ContextaTV",
    platforms: [
        .iOS(.v17),
        .macOS(.v14)
    ],
    products: [
        .library(
            name: "ContextaTV",
            targets: ["ContextaTV"]
        )
    ],
    targets: [
        .target(
            name: "ContextaTV",
            path: "ContextaTV"
        )
    ]
)
