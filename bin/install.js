#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");

const skillName = "pmbok8-document-generator";
const packageRoot = path.resolve(__dirname, "..");
const source = path.join(packageRoot, skillName);

const args = new Set(process.argv.slice(2));
const noOverwrite = args.has("--no-overwrite");
const help = args.has("--help") || args.has("-h");
const agent = getAgent();

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

function getArgValue(name) {
  const prefix = `${name}=`;
  const argv = process.argv.slice(2);
  const inline = argv.find((arg) => arg.startsWith(prefix));

  if (inline) {
    return inline.slice(prefix.length);
  }

  const index = argv.indexOf(name);
  if (index !== -1 && argv[index + 1]) {
    return argv[index + 1];
  }

  return null;
}

function getAgent() {
  const value = getArgValue("--agent") || "both";
  const normalized = value.toLowerCase();
  const validAgents = new Set(["claude", "codex", "both"]);

  if (!validAgents.has(normalized)) {
    fail(`Unsupported --agent value "${value}". Use claude, codex, or both.`);
  }

  return normalized;
}

function printHelp() {
  console.log("Install the PMBOK8 Document Generator skill.");
  console.log("");
  console.log("Usage:");
  console.log("  npx pmbok8-skill-installer");
  console.log("  npx pmbok8-skill-installer --agent claude");
  console.log("  npx pmbok8-skill-installer --agent codex");
  console.log("  npx pmbok8-skill-installer --agent both");
  console.log("");
  console.log("Options:");
  console.log("  --agent <claude|codex|both>  Target agent. Defaults to both.");
  console.log("  --no-overwrite               Fail if the skill already exists.");
  console.log("  -h, --help                   Show this help.");
  console.log("");
  console.log("Environment:");
  console.log("  CLAUDE_HOME                  Override Claude home. Defaults to ~/.claude.");
  console.log("  CODEX_HOME                   Override Codex home. Defaults to ~/.codex.");
}

function validateSkillSource() {
  const skillMd = path.join(source, "SKILL.md");

  if (!fs.existsSync(source)) {
    fail(`Skill source folder not found: ${source}`);
  }

  if (!fs.existsSync(skillMd)) {
    fail(`Skill source is missing SKILL.md: ${skillMd}`);
  }
}

function getInstallTargets() {
  const targets = [];

  if (agent === "claude" || agent === "both") {
    const claudeHome = process.env.CLAUDE_HOME
      ? path.resolve(process.env.CLAUDE_HOME)
      : path.join(os.homedir(), ".claude");

    targets.push({
      agent: "Claude",
      path: path.join(claudeHome, "skills", skillName),
    });
  }

  if (agent === "codex" || agent === "both") {
    const codexHome = process.env.CODEX_HOME
      ? path.resolve(process.env.CODEX_HOME)
      : path.join(os.homedir(), ".codex");

    targets.push({
      agent: "Codex",
      path: path.join(codexHome, "skills", skillName),
    });
  }

  return targets;
}

function installSkill(target) {
  const skillsRoot = path.dirname(target.path);
  fs.mkdirSync(skillsRoot, { recursive: true });

  if (fs.existsSync(target.path)) {
    if (noOverwrite) {
      fail(`Skill already exists at ${target.path}. Remove --no-overwrite to update it.`);
    }

    fs.rmSync(target.path, { recursive: true, force: true });
  }

  fs.cpSync(source, target.path, { recursive: true });
}

if (help) {
  printHelp();
  process.exit(0);
}

validateSkillSource();

const targets = getInstallTargets();
for (const target of targets) {
  installSkill(target);
}

console.log("Installed PMBOK8 Document Generator skill:");
for (const target of targets) {
  console.log(`- ${target.agent}: ${target.path}`);
}
console.log("");
console.log("Open a new Claude Code or Codex session, then use:");
console.log("Use pmbok8-document-generator to create a requirements documentation package.");
