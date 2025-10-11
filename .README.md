# SaaS Application with CI/CD Pipeline

[![CI](https://github.com/YOUR_USERNAME/saas-cicd-project/workflows/Continuous%20Integration/badge.svg)](https://github.com/YOUR_USERNAME/saas-cicd-project/actions)
[![CD](https://github.com/YOUR_USERNAME/saas-cicd-project/workflows/Continuous%20Deployment/badge.svg)](https://github.com/YOUR_USERNAME/saas-cicd-project/actions)
[![Security](https://github.com/YOUR_USERNAME/saas-cicd-project/workflows/Security%20Scanning/badge.svg)](https://github.com/YOUR_USERNAME/saas-cicd-project/actions)

Production-grade CI/CD pipeline implementation using GitHub Actions, Docker, and modern DevOps practices.

## 🚀 Features

- **Automated CI/CD Pipeline** - Continuous Integration and Deployment with GitHub Actions
- **Containerization** - Docker multi-stage builds for production
- **Security Scanning** - Automated vulnerability detection and secret scanning
- **Testing** - Comprehensive unit and integration tests
- **Monitoring** - Health checks and deployment verification
- **Multi-Environment** - Staging and production deployment workflows

## 📋 Prerequisites

- Node.js 18+ 
- Docker & Docker Compose
- Git
- GitHub account
- Docker Hub account (for image registry)

## 🛠️ Local Development Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/saas-cicd-project.git
cd saas-cicd-project
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment file

```bash
cp .env.example .env
# Edit .env with your configuration
```

### 4. Run the application

```bash
# Development mode
npm start

# With auto-reload
npm run dev

# Run tests
npm test

# Run with coverage
npm test -- --coverage
```

### 5. Access the application

- Application: http://localhost:3000
- Health check: http://localhost:3000/health
- API status: http://localhost:3000/api/status

## 🐳 Docker Setup

### Build and run with Docker

```bash
# Build image
docker build -t saas-app:latest .

# Run container
docker run -p 3000:3000 saas-app:latest
```

### Run with Docker Compose

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 🔄 CI/CD Pipeline

### Continuous Integration (CI)

Triggers on: Push to `main`, `develop`, or `feature/**` branches

**Pipeline stages:**
1. **Code Quality** - ESLint checks and formatting
2. **Testing** - Unit tests with coverage (Node 18 & 20)
3. **Docker Build** - Build and test Docker image
4. **Summary** - Aggregate results

### Continuous Deployment (CD)

Triggers on: Push to `main` branch or version tags

**Pipeline stages:**
1. **Build & Push** - Build Docker image and push to registry
2. **Deploy Staging** - Automatic deployment to staging
3. **Deploy Production** - Requires approval, then deploys to production
4. **Rollback** - Automatic rollback on failure

### Security Scanning

Triggers on: Daily schedule + push events

**Security checks:**
- Dependency vulnerability scanning (npm audit)
- Secret detection (TruffleHog)
- Code quality analysis (SonarCloud)
- Container image scanning (Trivy)
- License compliance

## 📦 Project Structure

```
saas-cicd-project/
├── .github/
│   └── workflows/          # GitHub Actions workflows
│       ├── ci.yml          # Continuous Integration
│       ├── cd.yml          # Continuous Deployment
│       └── security-scan.yml  # Security scanning
├── src/
│   └── app.js              # Application code
├── tests/
│   └── app.test.js         # Test files
├── Dockerfile              # Multi-stage Docker build
├── docker-compose.yml      # Local development stack
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## 🔐 Secrets Configuration

Required GitHub secrets:

| Secret | Description | Required |
|--------|-------------|----------|
| `DOCKER_USERNAME` | Docker Hub username | Yes |
| `DOCKER_PASSWORD` | Docker Hub access token | Yes |
| `AWS_ACCESS_KEY_ID` | AWS access key | Optional |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key | Optional |
| `SLACK_WEBHOOK` | Slack notification webhook | Optional |
| `SNYK_TOKEN` | Snyk security token | Optional |
| `SONAR_TOKEN` | SonarCloud token | Optional |

**Set secrets via CLI:**
```bash
gh secret set DOCKER_USERNAME
gh secret set DOCKER_PASSWORD
```

## 🌍 Environments

### Staging
- Auto-deploys on merge to `main`
- URL: https://staging.yourapp.com
- No approval required

### Production
- Deploys after staging success
- URL: https://yourapp.com
- Requires manual approval

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

## 📊 Monitoring

### Health Check Endpoint

```bash
curl http://localhost:3000/health
```

Response:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "uptime": 3600,
  "environment": "production",
  "version": "1.0.0"
}
```

## 🚀 Deployment

### Manual Deployment

```bash
# Deploy to staging
gh workflow run cd.yml -f environment=staging

# Deploy to production (requires approval)
gh workflow run cd.yml -f environment=production
```

### Create Release

```bash
# Tag and push
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0

# This triggers automatic deployment
```

## 🐛 Troubleshooting

### Pipeline fails at build

```bash
# Check logs
gh run list
gh run view <run-id> --log

# Run locally first
npm test
docker build -t test .
```

### Secrets not working

```bash
# Verify secrets
gh secret list

# Update secret
gh secret set SECRET_NAME
```

### Docker build fails

```bash
# Test locally with verbose output
docker build --no-cache --progress=plain -t test .
```

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/actions)
- [Docker Documentation](https://docs.docker.com/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

Your Name - [@yourhandle](https://github.com/YOUR_USERNAME)

## ⭐ Show Your Support

Give a ⭐ if this project helped you!