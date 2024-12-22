## GitHub Copilot Chat

- Extension Version: 0.23.2 (prod)
- VS Code: vscode/1.96.2
- OS: Windows

## Network

User Settings:

```json
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:

- DNS ipv4 Lookup: 50.7.87.86 (384 ms)
- DNS ipv6 Lookup: Error (534 ms): getaddrinfo EAI_AGAIN api.github.com
- Proxy URL: None (0 ms)
- Electron fetch (configured):
  timed out after 10 seconds
- Node.js https:
  timed out after 10 seconds
- Node.js fetch:
  timed out after 10 seconds
- Helix fetch:
  timed out after 10 seconds

Connecting to https://api.individual.githubcopilot.com/_ping:

- DNS ipv4 Lookup: 50.7.87.82 (365 ms)
- DNS ipv6 Lookup: Error (962 ms): getaddrinfo EAI_AGAIN api.individual.githubcopilot.com
- Proxy URL: None (0 ms)
- Electron fetch (configured): HTTP 200 (707 ms)
- Node.js https:
