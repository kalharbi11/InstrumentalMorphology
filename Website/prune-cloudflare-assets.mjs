import { readdirSync, rmSync, statSync } from "node:fs";
import path from "node:path";

const WRANGLER_MAX_ASSET_BYTES = 25 * 1024 * 1024;
const videoRoot = "out/assets/video";

function pruneOversizedFiles(dirPath) {
  let entries = [];
  try {
    entries = readdirSync(dirPath, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      pruneOversizedFiles(fullPath);
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    try {
      const stats = statSync(fullPath);
      if (stats.size > WRANGLER_MAX_ASSET_BYTES) {
        rmSync(fullPath, { force: true });
        console.log(`Pruned oversized deploy asset: ${fullPath}`);
      }
    } catch {
      // Ignore read/delete races and continue pruning.
    }
  }
}

pruneOversizedFiles(videoRoot);
