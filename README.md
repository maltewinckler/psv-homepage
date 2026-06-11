# PSV Essen Kampfsport Homepage

This is the official website for the Kampfsport department of PSV Essen. Built with [Next.js](https://nextjs.org/) and deployed using [Ansible](https://www.ansible.com/) with rootless [Podman](https://podman.io/) containers.

## Features

- **Modern Stack**: Next.js 16 with TypeScript and Tailwind CSS 4
- **Rootless Deployment**: Containerized using Podman without privileged mode
- **Reverse Proxy**: Caddy handles SSL/TLS termination and HTTP/HTTPS redirects
- **Static Generation**: All content is pre-rendered for optimal performance
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Project Structure

```
├── ansible/                  # Ansible deployment configuration
│   ├── deploy.yml           # Main playbook
│   ├── inventory.ini        # Server inventory
│   ├── templates/           # Jinja2 templates for Caddy & Compose
│   └── vars/                # Deployment variables
├── public/                   # Static assets
│   └── images/              # Blog post and page images
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── aktuelles/       # Blog/news section
│   │   ├── datenschutz/     # Privacy policy
│   │   └── impressum/       # Legal notice
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   ├── sections/        # Homepage sections
│   │   └── ui/              # Reusable UI components
│   └── content/             # Static content (blog posts, trainers, etc.)
├── ansible.cfg              # Ansible configuration
├── Dockerfile               # Multi-stage Docker/Podman build
├── next.config.ts           # Next.js configuration
└── package.json
```

## Development

### Prerequisites

- Node.js 22+
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server (locally)
npm start
```

The development server will be available at [http://localhost:3000](http://localhost:3000).

## Deployment

The homepage is deployed using Ansible to a Linux VPS running Podman.

### Prerequisites

- A Linux server with Podman and Podman Compose installed
- SSH access with key-based authentication
- DNS configured to point to the server IP
- Docker Hub account with the `kampfsport-psvessen` image

### Running the Deployment

```bash
# Deploy to the server
ansible-playbook ansible/deploy.yml
```

Ansible will:
1. Install required packages (`ufw`, `podman`, `podman-compose`)
2. Configure the firewall (allow SSH, HTTP, HTTPS)
3. Set up unprivileged port access for rootless Podman
4. Create a shared Podman network
5. Deploy Caddy and the homepage containers
6. Verify the deployment

### Manual Server Commands

```bash
# Check container status
podman ps

# View Caddy logs
podman logs caddy

# View homepage logs
podman logs homepage

# Restart containers
cd /home/malte/deploy
podman compose -f caddy-compose.yml up -d
podman compose -f homepage-compose.yml up -d
```

## Architecture

```
                    Internet
                        │
                        ▼
                  ┌─────────┐
                  │   UFW   │ ← Firewall (80, 443, 22 only)
                  └────┬────┘
                        │
                  ┌─────▼─────┐
                  │   Caddy   │ ← Reverse Proxy (rootless Podman)
                  │  :80/:443 │
                  └─────┬─────┘
                        │ internal network
                  ┌─────▼─────┐
                  │ Homepage  │ ← Next.js App (rootless Podman)
                  │  :3000    │ ← Not exposed to host
                  └───────────┘
```

### Key Security Features

- **Rootless Containers**: Both Caddy and the homepage run as unprivileged users
- **Strict Firewall**: Only ports 22, 80, and 443 are open
- **No Privileged Mode**: Containers do not use `privileged: true`
- **Network Isolation**: The homepage is only accessible via Caddy's internal network
- **Unprivileged Ports**: `net.ipv4.ip_unprivileged_port_start=80` allows rootless port binding

## CI/CD

Docker images are published to Docker Hub via GitHub Actions when a release tag is pushed:

```bash
git tag v1.0.0
git push origin v1.0.0
```

This triggers the [`.github/workflows/docker-publish.yml`](.github/workflows/docker-publish.yml) workflow which:
1. Builds the image using the root `Dockerfile`
2. Pushes `kampfsport-psvessen:latest` and `kampfsport-psvessen:v1.0.0` to Docker Hub

## License

This project is proprietary to PSV Essen Kampfsport.
