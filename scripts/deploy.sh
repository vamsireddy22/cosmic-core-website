#!/bin/bash

# CosmicCore Website Deployment Script - GitHub Pages Only
# Usage: ./scripts/deploy.sh

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
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

# Function to build the project
build_project() {
    print_status "Building project..."
    
    # Check if node_modules exists
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

# Function to deploy to GitHub Pages
deploy_github_pages() {
    print_status "Deploying to GitHub Pages..."
    
    build_project
    
    # Create .nojekyll file for GitHub Pages
    touch build/.nojekyll
    
    # Copy 404.html to build directory if it doesn't exist
    if [ ! -f "build/404.html" ]; then
        cp public/404.html build/404.html
    fi
    
    # Deploy using gh-pages package
    if npm list gh-pages >/dev/null 2>&1; then
        npx gh-pages -d build
    else
        print_warning "gh-pages package not found. Installing..."
        npm install --save-dev gh-pages
        npx gh-pages -d build
    fi
    
    print_success "Deployed to GitHub Pages successfully!"
    print_status "Your site will be available at: https://vamsi.github.io/cosmic-core-website"
    print_status "Note: It may take a few minutes for changes to appear"
}



# Function to show help
show_help() {
    echo "CosmicCore Website Deployment Script - GitHub Pages"
    echo ""
    echo "Usage: $0 [command]"
    echo ""
    echo "Commands:"
    echo "  deploy    - Build and deploy to GitHub Pages (default)"
    echo "  build     - Build project only"
    echo "  help      - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0"
    echo "  $0 deploy"
    echo "  $0 build"
}

# Main script logic
case "${1:-deploy}" in
    "deploy")
        deploy_github_pages
        ;;
    "build")
        build_project
        ;;
    "help"|"--help"|"-h")
        show_help
        ;;
    *)
        print_error "Unknown command: $1"
        show_help
        exit 1
        ;;
esac 