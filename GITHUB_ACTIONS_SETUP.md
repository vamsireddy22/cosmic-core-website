# GitHub Actions Setup Guide

This guide explains how to set up and use the automated deployment workflows for the Cosmic Core Website.

## 🚀 Quick Start

The GitHub Actions are already configured and will work automatically once you push to the main branch.

## 📋 Workflows Overview

### 1. **Automatic Deployment** (`.github/workflows/deploy.yml`)

**Triggers:**
- Push to `main` or `master` branch
- Pull request to `main` or `master` branch

**What it does:**
- ✅ Type checking
- ✅ Linting
- ✅ Building
- ✅ Automatic deployment to GitHub Pages (only on main branch)

### 2. **Pull Request Validation** (`.github/workflows/pull-request.yml`)

**Triggers:**
- Pull request to `main` or `master` branch

**What it does:**
- ✅ Type checking
- ✅ Linting
- ✅ Building
- ✅ Comments on PR with build status

### 3. **Scheduled Maintenance** (`.github/workflows/scheduled-checks.yml`)

**Triggers:**
- Every Monday at 9 AM UTC
- Manual trigger (workflow_dispatch)

**What it does:**
- ✅ Dependency audit
- ✅ Security checks
- ✅ Outdated package detection

## 🔧 Setup Instructions

### Step 1: Enable GitHub Actions

1. Go to your repository on GitHub
2. Click on the **Actions** tab
3. You should see the workflows listed
4. Click on each workflow to enable it

### Step 2: Configure GitHub Pages

1. Go to **Settings** > **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Select **gh-pages** branch
4. Click **Save**

### Step 3: Set Repository Permissions

1. Go to **Settings** > **Actions** > **General**
2. Under **Workflow permissions**, select **Read and write permissions**
3. Check **Allow GitHub Actions to create and approve pull requests**
4. Click **Save**

## 🎯 How to Use

### For Regular Development

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature
   ```

2. **Make your changes and commit:**
   ```bash
   git add .
   git commit -m "Add your feature"
   ```

3. **Push to your branch:**
   ```bash
   git push origin feature/your-feature
   ```

4. **Create a Pull Request:**
   - Go to GitHub and create a PR
   - The PR checks will run automatically
   - Wait for all checks to pass

5. **Merge to main:**
   - Once PR is approved and checks pass
   - Merge to main branch
   - **Website deploys automatically!**

### For Direct Main Branch Updates

1. **Make your changes:**
   ```bash
   git add .
   git commit -m "Update website"
   ```

2. **Push to main:**
   ```bash
   git push origin main
   ```

3. **Website deploys automatically!**

## 📊 Monitoring Workflows

### View Workflow Runs

1. Go to **Actions** tab on GitHub
2. Click on any workflow to see its runs
3. Click on a specific run to see detailed logs

### Workflow Status

- ✅ **Green** - All checks passed
- ❌ **Red** - Some checks failed
- 🟡 **Yellow** - Workflow in progress

### Common Issues

#### Build Fails
- Check the logs for specific errors
- Usually TypeScript or linting issues
- Fix locally and push again

#### Deployment Fails
- Check if GitHub Pages is properly configured
- Verify repository permissions
- Check if gh-pages branch exists

## 🔒 Security Features

### Dependency Scanning
- Weekly security audits
- Outdated package detection
- Vulnerability alerts

### Quality Gates
- Type checking required
- Linting must pass
- Build must succeed

## 📈 Benefits

- **Zero Manual Deployment** - Just push to main
- **Quality Assurance** - PRs must pass checks
- **Consistent Environment** - Same build process every time
- **Security Monitoring** - Regular dependency audits
- **Rollback Capability** - Previous versions preserved
- **Team Collaboration** - Clear status for all changes

## 🆘 Troubleshooting

### Workflow Not Running
1. Check if Actions are enabled
2. Verify branch name (main/master)
3. Check repository permissions

### Deployment Not Working
1. Verify GitHub Pages configuration
2. Check gh-pages branch exists
3. Review workflow logs for errors

### Build Failures
1. Run `npm run build` locally
2. Check TypeScript errors
3. Fix linting issues
4. Update dependencies if needed

## 📞 Support

If you encounter issues:

1. **Check the Actions tab** for detailed logs
2. **Review this guide** for common solutions
3. **Create an issue** on GitHub for persistent problems

---

**Your website will automatically deploy on every push to main! 🚀** 