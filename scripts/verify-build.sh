#!/bin/bash

# Build Verification Script for GitHub Pages
# This script builds the project and serves it locally to verify it works

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if serve is installed
check_serve() {
    if ! command -v serve &> /dev/null; then
        print_warning "serve not found. Installing..."
        npm install -g serve
    fi
}

# Build the project
build_project() {
    print_status "Building project..."
    
    # Clean previous build
    if [ -d "build" ]; then
        rm -rf build
    fi
    
    # Install dependencies if needed
    if [ ! -d "node_modules" ]; then
        print_status "Installing dependencies..."
        npm install
    fi
    
    # Run type checking
    print_status "Running type checking..."
    npm run type-check
    
    # Run linting
    print_status "Running linting..."
    npm run lint || print_warning "Linting completed with warnings"
    
    # Build the project
    print_status "Building production bundle..."
    npm run build
    
    print_success "Build completed successfully!"
}

# Verify build files
verify_build() {
    print_status "Verifying build files..."
    
    # Check if build directory exists
    if [ ! -d "build" ]; then
        print_error "Build directory not found!"
        exit 1
    fi
    
    # Check for essential files
    required_files=("index.html" "static/js" "static/css")
    
    for file in "${required_files[@]}"; do
        if [ ! -e "build/$file" ]; then
            print_error "Required file/directory not found: build/$file"
            exit 1
        fi
    done
    
    # Check build size
    build_size=$(du -sh build | cut -f1)
    print_status "Build size: $build_size"
    
    print_success "Build verification completed!"
}

# Serve the build locally
serve_build() {
    print_status "Starting local server..."
    
    check_serve
    
    print_status "Serving build at http://localhost:3000"
    print_status "This simulates how your site will work on GitHub Pages"
    print_status "Press Ctrl+C to stop the server"
    
    serve -s build -l 3000
}

# Main script
main() {
    case "${1:-serve}" in
        "build")
            build_project
            verify_build
            ;;
        "serve")
            build_project
            verify_build
            serve_build
            ;;
        "verify")
            verify_build
            ;;
        "help"|"--help"|"-h")
            echo "Build Verification Script for GitHub Pages"
            echo ""
            echo "Usage: $0 [command]"
            echo ""
            echo "Commands:"
            echo "  build   - Build and verify the project"
            echo "  serve   - Build, verify, and serve locally (default)"
            echo "  verify  - Verify existing build only"
            echo "  help    - Show this help message"
            echo ""
            echo "This script helps you test your build before deploying to GitHub Pages."
            ;;
        *)
            print_error "Unknown command: $1"
            echo "Use '$0 help' for usage information"
            exit 1
            ;;
    esac
}

main "$@" 