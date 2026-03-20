
# AppFence

**Application Permission Firewall for Linux Desktop**

> *Your desktop. Your rules. Your privacy.*

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![Rust](https://img.shields.io/badge/rust-1.75%2B-orange.svg)](https://www.rust-lang.org/)
[![Platform](https://img.shields.io/badge/platform-Linux%20Wayland-green.svg)](https://wayland.freedesktop.org/)

---

**Product of [Paperfrogs/Open](https://github.com/paperfrogs-hq)**

## Security Notice

Security audit summary: All known vulnerable dependencies have been updated. No critical build errors detected. Code warnings (unused imports, variables, dead code) remain, but do not affect functionality. AppFence is still in early development and has not undergone a full professional security audit. Do not rely on it for critical security requirements yet.

## The Problem

Linux desktops lack a unified permission model. Applications can access your files, camera/microphone, network, and clipboard without meaningful consent.

---

## What AppFence Does

- Runtime prompts for filesystem, network, devices, and clipboard access
- Per-application policies with allow/deny/ask controls
- Enforcement through Linux namespaces, cgroups, and sandboxing
- Local-only auditing and visibility

---

## Architecture at a Glance

- **Daemon (`apfd`)**: system service that evaluates policies and coordinates enforcement
- **Agent (`apf-agent`)**: user-session component that surfaces prompts and collects decisions
- **Launcher (`apf-run`)**: wraps application startup to apply namespaces/sandboxing
- **Policy Engine (`apf-policy`)**: stores and evaluates per-app rules
- **UI (`apf-ui`)**: desktop dashboard for managing permissions and reviewing audits

---

## Quick Start (preview)

```bash
# build workspace
cargo build --workspace

# run setup helpers
./scripts/setup-dev.sh

# launch an app with enforcement
apf-run firefox
```

---

## Comparison (high level)

| Feature | AppFence | Flatpak | Firejail |
|---------|----------|---------|----------|
| Works for all apps | Yes | No (packaged apps) | Yes |
| Permission prompts | Yes | No | No |
| Network control | Yes | Partial | Partial |
| Filesystem granularity | Yes | Yes | Yes |
| Desktop integration | Yes | Partial | Limited |

---


## Philosophy

- User agency first: explicit prompts and clear defaults
- Transparent limits: state what can and cannot be enforced
- Privacy by default: no telemetry, local policy storage
- OS-native: rely on documented Linux primitives, avoid kernel hacks
- Memory safety: Rust for security-sensitive components

---

## Setup Instructions

### Linux (Ubuntu, Fedora, Arch)

1. **Install dependencies:**
	- Ubuntu:
	  ```bash
	  sudo apt install libsystemd-dev libsqlite3-dev bubblewrap
	  ```
	- Fedora:
	  ```bash
	  sudo dnf install systemd-devel sqlite-devel bubblewrap
	  ```
	- Arch:
	  ```bash
	  sudo pacman -S systemd sqlite bubblewrap
	  ```

2. **Build the project:**
	```bash
	cargo build --workspace
	```

3. **Run development setup:**
	```bash
	./scripts/setup-dev.sh
	```

4. **Install and start the daemon:**
	```bash
	sudo ./scripts/install-daemon.sh
	sudo systemctl start apf-daemon
	sudo systemctl enable apf-daemon
	```

5. **Check status and logs:**
	```bash
	sudo systemctl status apf-daemon
	sudo journalctl -u apf-daemon -f
	```

---

### macOS (Experimental)

AppFence is primarily designed for Linux. macOS support is experimental and limited:

1. **Install Rust:**
	```bash
	brew install rust
	```

2. **Build the project:**
	```bash
	cargo build --workspace
	```

3. **Note:**
	- Linux-specific features (namespaces, cgroups, bubblewrap, systemd, DBus, Polkit) are not available on macOS.
	- Only core components may build; enforcement and daemon functionality will not work.
	- Contributions for macOS support are welcome!

---

## License

Licensed under the Apache License, Version 2.0. See [LICENSE](LICENSE) for details.