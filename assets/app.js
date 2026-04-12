// assets/app.js
(() => {
const storage = {
get(key, fallback = null) {
try {
const value = localStorage.getItem(key);
return value === null ? fallback : value;
} catch {
return fallback;
}
},
set(key, value) {
try {
localStorage.setItem(key, value);
} catch {}
},
remove(key) {
try {
localStorage.removeItem(key);
} catch {}
},
};

async function copyText(text) {
try {
await navigator.clipboard.writeText(text);
return true;
} catch {
try {
const temp = document.createElement("textarea");
temp.value = text;
temp.setAttribute("readonly", "");
temp.style.position = "absolute";
temp.style.left = "-9999px";
document.body.appendChild(temp);
temp.select();
const ok = document.execCommand("copy");
document.body.removeChild(temp);
return ok;
} catch {
return false;
}
}
}

function flashButtonText(button, nextText, delay = 900, restoreDisabled = null) {
if (!button) return;
const oldText = button.textContent;
button.textContent = nextText;

setTimeout(() => {
button.textContent = oldText;
if (typeof restoreDisabled === "boolean") {
button.disabled = restoreDisabled;
}
}, delay);
}

// ----------------------------
// 1) Mobile / desktop nav toggle
// ----------------------------
function setupNavToggle() {
const navBtn = document.getElementById("navToggle");
if (!navBtn) return;

navBtn.addEventListener("click", () => {
document.body.classList.toggle("navCollapsed");
});
}

// ----------------------------
// 2) Pre / post setup switching
// ----------------------------
function setupDashboardState() {
const complete = storage.get("commonshub_setup_complete") === "1";

const pre = document.getElementById("preSetup");
const post = document.getElementById("postSetup");
const navSubtitle = document.getElementById("navSubtitle");

if (pre && post) {
pre.style.display = complete ? "none" : "block";
post.style.display = complete ? "block" : "none";
}

if (navSubtitle) {
navSubtitle.textContent = complete
? "Health + key actions"
: "Live + next step";
}
}

// ----------------------------
// 3) DNS state (dashboard header)
// Uses:
//   body data-domain-type / data-dns-status
//   localStorage overrides if present
// Allowed domain types:
//   commonshub_subdomain
//   external_subdomain
//   custom_domain
// ----------------------------
function setupDnsState() {
const body = document.body;
const dnsPendingWrap = document.getElementById("dnsPendingWrap");
const dnsVerifiedWrap = document.getElementById("dnsVerifiedWrap");
const checkDnsBtn = document.getElementById("checkDnsBtn");

const reviewLaunchWrap = document.getElementById("reviewLaunchWrap");
const quickActionsCard = document.getElementById("quickActionsCard");

const dnsPendingCard = document.getElementById("dnsPendingCard");
const dnsVerifiedCard = document.getElementById("dnsVerifiedCard");
const dnsSetupCard = document.getElementById("dnsSetupCard");

const manualDnsLoginBtn = document.getElementById("manualDnsLoginBtn");
const showAutoDns = document.getElementById("showAutoDns");
const showManualDns = document.getElementById("showManualDns");
const autoDnsSection = document.getElementById("autoDnsSection");
const authorizeDnsBtn = document.getElementById("authorizeDnsBtn");

const visitCommunityBtn = document.getElementById("visitCommunityBtn");
const viewHubBtn = document.getElementById("viewHubBtn");
const generateInviteBtn = document.getElementById("generateInviteBtn");

const communityTab = document.getElementById("communityTab");
const financialTab = document.getElementById("financialTab");
const accountTab = document.getElementById("accountTab");

if (!dnsPendingWrap || !dnsVerifiedWrap || !checkDnsBtn) return;

let domainType =
storage.get("commonshub_domain_type") ||
body.dataset.domainType ||
"commonshub_subdomain";

let dnsStatus =
body.dataset.dnsStatus ||
storage.get("commonshub_dns_status") ||
"not_applicable";

function setTabsEnabled(enabled) {
[communityTab, financialTab, accountTab].forEach(tab => {
if (!tab) return;
tab.classList.toggle("disabled", !enabled);
});
}

function needsDns(domainTypeValue) {
return (
domainTypeValue === "external_subdomain" ||
domainTypeValue === "custom_domain"
);
}

function setQuickActions(enabled) {
[visitCommunityBtn, viewHubBtn, generateInviteBtn].forEach(btn => {
if (!btn) return;

btn.style.pointerEvents = enabled ? "auto" : "none";
btn.style.opacity = enabled ? "1" : ".45";
btn.classList.toggle("disabled", !enabled);
});
}

function renderDnsState() {
dnsPendingWrap.style.display = "none";
dnsVerifiedWrap.style.display = "none";

if (dnsPendingCard) dnsPendingCard.style.display = "none";
if (dnsVerifiedCard) dnsVerifiedCard.style.display = "none";
if (dnsSetupCard) dnsSetupCard.style.display = "none";
if (autoDnsSection) autoDnsSection.style.display = "none";

if (reviewLaunchWrap) reviewLaunchWrap.style.display = "none";
if (quickActionsCard) quickActionsCard.style.display = "none";

if (!needsDns(domainType)) {
setTabsEnabled(true);
setQuickActions(true);
if (reviewLaunchWrap) reviewLaunchWrap.style.display = "block";
if (quickActionsCard) quickActionsCard.style.display = "block";
return;
}

if (dnsStatus === "verified") {
setTabsEnabled(true);
dnsVerifiedWrap.style.display = "inline-flex";
if (dnsVerifiedCard) dnsVerifiedCard.style.display = "block";

if (reviewLaunchWrap) reviewLaunchWrap.style.display = "block";
if (quickActionsCard) quickActionsCard.style.display = "block";

setQuickActions(true);

} else {
setTabsEnabled(false);
setQuickActions(false);

dnsPendingWrap.style.display = "inline-flex";
if (dnsPendingCard) dnsPendingCard.style.display = "block";
if (dnsSetupCard) dnsSetupCard.style.display = "block";
}
}

const registrarLoginUrl = "https://sso.godaddy.com/?app=oos&realm=idp&path=%2Fproducts";
const dnsAuthorizationUrl = "https://example.com/dns/authorize/godaddy"; // replace later

function showManualSection() {
if (dnsSetupCard) dnsSetupCard.style.display = "block";
if (autoDnsSection) autoDnsSection.style.display = "none";
}

function showAutoSection() {
if (dnsSetupCard) dnsSetupCard.style.display = "none";
if (autoDnsSection) autoDnsSection.style.display = "block";
}

function openRegistrarLogin() {
if (registrarLoginUrl && registrarLoginUrl !== "#") {
window.open(registrarLoginUrl, "_blank", "noopener,noreferrer");
} else {
alert("Please log in to your registrar manually and add the DNS record shown above.");
}
}

if (showAutoDns) {
showAutoDns.addEventListener("click", () => {
showAutoSection();
});
}

if (showManualDns) {
showManualDns.addEventListener("click", () => {
showManualSection();
openRegistrarLogin();
});
}

if (manualDnsLoginBtn) {
manualDnsLoginBtn.addEventListener("click", () => {
showManualSection();
openRegistrarLogin();
});
}

if (authorizeDnsBtn) {
authorizeDnsBtn.addEventListener("click", (event) => {
event.preventDefault();

if (dnsAuthorizationUrl && dnsAuthorizationUrl !== "#") {
window.open(dnsAuthorizationUrl, "_blank", "noopener,noreferrer");
} else {
alert("Authorization link is not set yet.");
}
});
}

checkDnsBtn.addEventListener("click", () => {
const oldText = checkDnsBtn.textContent;
checkDnsBtn.textContent = "Checking...";
checkDnsBtn.disabled = true;

setTimeout(() => {
dnsStatus = "verified";
storage.set("commonshub_dns_status", "verified");
body.dataset.dnsStatus = "verified";

renderDnsState();

checkDnsBtn.textContent = oldText;
checkDnsBtn.disabled = false;
}, 900);
});

renderDnsState();
}

// ----------------------------
// 4) Mastodon access buttons
// Show "Sign in" first, then "Mastodon dashboard"
// after login button has been clicked once
// ----------------------------
function setupMastodonAdminButtons() {
const loginBtn = document.getElementById("mastodonLoginBtn");
const adminBtn = document.getElementById("mastodonAdminBtn");
const hint = document.getElementById("mastodonHint");

if (!loginBtn || !adminBtn) return;

const KEY = "commonshub_mastodon_login_attempted";
const loginAttempted = storage.get(KEY) === "1";

loginBtn.style.display = loginAttempted ? "none" : "inline-flex";
adminBtn.style.display = loginAttempted ? "inline-flex" : "none";
if (hint) hint.style.display = loginAttempted ? "none" : "block";

loginBtn.addEventListener("click", () => {
storage.set(KEY, "1");
setTimeout(() => window.location.reload(), 150);
});
}

// ----------------------------
// 5) Guided setup checklist
// ----------------------------

function setupContinueSetup() {
const btn = document.getElementById("continueSetupBtn");
if (!btn) return;

btn.addEventListener("click", () => {
const steps = Array.from(document.querySelectorAll(".setupStep"));
if (!steps.length) return;

let targetStep = null;

steps.forEach((step) => {
if (!targetStep && step.dataset.completed !== "true") {
targetStep = step;
}
});

if (!targetStep) return;

const toggleLink = targetStep.querySelector(".stepToggleLink");
if (!toggleLink) return;

toggleLink.click();
targetStep.scrollIntoView({ behavior: "smooth", block: "start" });
});
}

function setupChecklist() {
const checklistEl = document.getElementById("setupChecklist");
if (!checklistEl) return;

const host = "https://peakx.social";
const DONE_KEY = "commonshub_setup_checklist_done_v1";

const copyPack = {
about_short_description:
"A calm home for your community — chronological signal, visible participants, no algorithmic incentives.",
about_long_description:
"This space is designed for serious conversation that compounds over time. Posts are chronological. Participants are visible. Discussion is stewarded, not optimized for engagement.\n\nUse this as a working room: make claims, share sources, ask better questions, and build shared context.\n\nCommonshub handles hosting and invites. Mastodon provides the social layer.",
rules:
"• Be constructive.\n• Argue with sources when possible.\n• No harassment or pile-ons.\n• Keep the signal high.\n• Moderation exists to protect the room, not to win arguments.",
welcome_post:
"Welcome — this is the first thread in the room.\n\nStart here:\n• Introduce yourself (who you are + what you’re here to learn/build)\n• Share one question you’d love the community to tackle\n\nThis space is chronological. The goal is to build shared context over time.",
invite_message:
"I’m opening a new community space on Mastodon. It’s a calm, chronological room for thoughtful discussion — no ads, no algorithmic feed.\n\nJoin here: [INVITE LINK]\n\nIf you join, reply with an intro + what you hope to contribute.",
};

const steps = [
{
id: "login",
title: "Sign in to Mastodon",
why: "You’ll need an authenticated Mastodon session before admin links will work.",
openUrl: `${host}/auth/sign_in`,
},
{
id: "owner_profile",
title: "Owner profile basics",
why: "Set display name + bio so the room feels hosted and credible.",
openUrl: `${host}/settings/profile`,
},
{
id: "about",
title: "About text",
why: "This becomes the server description + sets expectations for new members.",
openUrl: `${host}/admin/settings/about`,
copyKey: "about_long_description",
copyLabel: "Suggested About / long description",
},
{
id: "registrations",
title: "Registrations",
why: "Decide whether signups are invite-only, approval-based, or open.",
openUrl: `${host}/admin/settings/registrations`,
},
{
id: "branding",
title: "Branding",
why: "Optional. If you want: set icon + banner. (We’re not storing assets in MVP.)",
openUrl: `${host}/admin/settings/branding`,
},
{
id: "discovery",
title: "Discovery",
why: "Controls how visible the instance is (directory, discovery surfaces).",
openUrl: `${host}/admin/settings/discovery`,
},
{
id: "invites",
title: "Invites",
why: "Generate invite links and share them with your initial collaborators.",
openUrl: `${host}/admin/invites`,
copyKey: "invite_message",
copyLabel: "Suggested invite message",
},
];

function loadDone() {
try {
return JSON.parse(storage.get(DONE_KEY, "{}"));
} catch {
return {};
}
}

function saveDone(done) {
storage.set(DONE_KEY, JSON.stringify(done));
}

function render() {
const done = loadDone();
checklistEl.innerHTML = "";

steps.forEach((step) => {
const isDone = !!done[step.id];
const row = document.createElement("div");
row.className = "item";
row.style.alignItems = "flex-start";
row.style.gap = "12px";
row.style.padding = "14px 0";
row.style.borderBottom = "1px solid var(--line, #d9e2dc)";

row.innerHTML = `
<div style="flex:1;">
<div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
<b style="font-size:14px;">${step.title}</b>
${
isDone
? `<span class="chip" style="font-size:12px;">Done</span>`
: `<span class="chip" style="font-size:12px; opacity:.75;">To do</span>`
}
</div>

<div class="muted" style="margin-top:6px; font-size:13px; line-height:1.35;">
${step.why}
</div>

${
step.copyKey
? `
<div style="margin-top:10px;">
<a
href="#"
data-toggle-copy="${step.id}"
class="secondary"
style="display:inline-flex; width:auto; padding:8px 10px;"
>
${isDone ? "Show suggested copy" : "Hide suggested copy"}
</a>

<div data-copy-wrap="${step.id}" style="margin-top:10px; ${isDone ? "display:none;" : ""}">
<div class="muted" style="font-size:12px; margin-bottom:6px;">
${step.copyLabel}
</div>
<textarea
readonly
style="width:100%; min-height:110px; resize:vertical; padding:10px; border-radius:12px; border:1px solid #d9e2dc; font-size:12px; line-height:1.35; background:rgba(16,32,24,.03);"
>${copyPack[step.copyKey]}</textarea>
<div style="display:flex; gap:10px; margin-top:10px; flex-wrap:wrap;">
<button
class="secondary"
data-copy-btn="${step.id}"
type="button"
style="width:auto;"
>
Copy text
</button>
</div>
</div>
</div>
`
: ""
}
</div>

<div style="display:flex; gap:10px; flex-wrap:wrap; justify-content:flex-end;">
<a
class="secondary"
href="${step.openUrl}"
target="_blank"
rel="noopener"
style="width:auto;"
>
Open
</a>
<button
class="secondary"
type="button"
data-done-btn="${step.id}"
style="width:auto;"
>
${isDone ? "Mark not done" : "Mark done"}
</button>
</div>
`;

checklistEl.appendChild(row);
});

checklistEl.querySelectorAll("[data-done-btn]").forEach((btn) => {
btn.addEventListener("click", () => {
const id = btn.getAttribute("data-done-btn");
const done = loadDone();
done[id] = !done[id];
saveDone(done);
render();
});
});

checklistEl.querySelectorAll("[data-toggle-copy]").forEach((link) => {
link.addEventListener("click", (e) => {
e.preventDefault();
const id = link.getAttribute("data-toggle-copy");
const wrap = checklistEl.querySelector(`[data-copy-wrap="${id}"]`);
if (!wrap) return;

const showing = wrap.style.display !== "none";
wrap.style.display = showing ? "none" : "block";
link.textContent = showing
? "Show suggested copy"
: "Hide suggested copy";
});
});

checklistEl.querySelectorAll("[data-copy-btn]").forEach((btn) => {
btn.addEventListener("click", async () => {
const id = btn.getAttribute("data-copy-btn");
const step = steps.find((s) => s.id === id);
if (!step?.copyKey) return;

const ok = await copyText(copyPack[step.copyKey]);
flashButtonText(btn, ok ? "Copied" : "Copy failed");
});
});
}

render();
}

// ----------------------------
// 6) Copy invite link
// ----------------------------
function setupInviteCopy() {
const copyBtn = document.getElementById("copyInviteBtn");
const inviteField = document.getElementById("inviteField");
const inviteInput = document.getElementById("inviteLink");

if (!copyBtn || !inviteInput) return;

copyBtn.addEventListener("click", async () => {
if (inviteField) inviteField.style.display = "block";

inviteInput.focus();
inviteInput.select();

const ok = await copyText(inviteInput.value);
flashButtonText(copyBtn, ok ? "Copied" : "Copy failed");
});
}

// ----------------------------
// 7) Reset flow
// ----------------------------
function resetFlow(kind) {
const baseKeys = [
"commonshub_server_live",
"commonshub_setup_complete",
"commonshub_setup_step",
"commonshub_celebrate_once",
"commonshub_mastodon_login_attempted",
];

const fundingKeys = [
"commonshub_stripe_connected",
"commonshub_funding_enabled",
"commonshub_funding_subs_on",
"commonshub_funding_tips_on",
];

if (kind === "all" || kind === "server") {
[...baseKeys, ...fundingKeys].forEach((key) => storage.remove(key));
} else if (kind === "community") {
[
"commonshub_setup_complete",
"commonshub_setup_step",
"commonshub_celebrate_once",
"commonshub_mastodon_login_attempted",
].forEach((key) => storage.remove(key));
}

try {
sessionStorage.removeItem("commonshub_in_setup_flow");
} catch {}

const target =
kind === "server"
? "setup.html"
: kind === "community"
? "dashboard.html"
: "index.html";

window.location.href = target;
}

function setupResetHandlers() {
document.addEventListener("click", (e) => {
const el = e.target?.closest?.("[data-reset]");
if (!el) return;

e.preventDefault();
const kind = (el.getAttribute("data-reset") || "all").toLowerCase();

if (!["all", "server", "community"].includes(kind)) return;
resetFlow(kind);
});
}

// ----------------------------
// 8) Funding UI (dashboard)
// ----------------------------
function setupFundingUi() {
const stripeStatus = document.getElementById("stripeStatus");
const fundingStatus = document.getElementById("fundingStatus");
const fundingSubcopy = document.getElementById("fundingSubcopy");
const fundingPrimaryBtn = document.getElementById("fundingPrimaryBtn");
const fundingCtaWrap = document.getElementById("fundingCtaWrap");
const fundingLiveActions = document.getElementById("fundingLiveActions");

if (!fundingPrimaryBtn || !fundingCtaWrap || !fundingLiveActions) return;

const stripeConnected = storage.get("commonshub_stripe_connected") === "1";
const fundingEnabled = storage.get("commonshub_funding_enabled") === "1";

fundingCtaWrap.style.display = "flex";
fundingLiveActions.style.display = "none";

if (stripeStatus) {
stripeStatus.textContent = stripeConnected ? "Connected" : "Not connected";
}

if (!stripeConnected) {
if (fundingStatus) fundingStatus.textContent = "Off";
if (fundingSubcopy) {
fundingSubcopy.textContent =
"Optional. Participation is always free. Connect Stripe to enable community funding.";
}
fundingPrimaryBtn.textContent = "Enable community funding";
fundingPrimaryBtn.href = "funding-start.html";
return;
}

if (!fundingEnabled) {
if (fundingStatus) fundingStatus.textContent = "Off";
if (fundingSubcopy) {
fundingSubcopy.textContent =
"Stripe is connected. Turn on community funding when you’re ready.";
}
fundingPrimaryBtn.textContent = "Turn on community funding";
fundingPrimaryBtn.href = "funding-options.html";
return;
}

if (fundingStatus) fundingStatus.textContent = "Live";
if (fundingSubcopy) {
fundingSubcopy.textContent = "Community funding is live and shareable.";
}

fundingCtaWrap.style.display = "none";
fundingLiveActions.style.display = "block";
}

// ----------------------------
// 9) Service tabs
// ----------------------------
function setupServiceTabs() {
const tabs = Array.from(document.querySelectorAll("[data-service-tab]"));
const panels = Array.from(document.querySelectorAll("[data-service-panel]"));

if (!tabs.length || !panels.length) return;

function activateTab(name) {
tabs.forEach((tab) => {
const active = tab.getAttribute("data-service-tab") === name;
tab.classList.toggle("active", active);
});

panels.forEach((panel) => {
const show = panel.getAttribute("data-service-panel") === name;
panel.classList.toggle("active", show);
panel.style.display = show ? "block" : "none";
});
}

tabs.forEach((tab) => {
tab.addEventListener("click", () => {
activateTab(tab.getAttribute("data-service-tab"));
});
});

const initial =
document.querySelector("[data-service-tab].active")?.getAttribute("data-service-tab") ||
"mastodon";

activateTab(initial);
}

// ----------------------------
// 10) Launch setup steps page
// ----------------------------

function setupLaunchSteps() {
const TOTAL_STEPS = 7;
const steps = Array.from(document.querySelectorAll(".setupStep"));
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const progressPercent = document.getElementById("progressPercent");

const attentionCard = document.getElementById("launchAttentionCard");
const communityReadyCard = document.getElementById("communityReadyCard");

if (!steps.length || !progressBar || !progressText || !progressPercent) return;

function setToggleLabel(step) {
const toggleLinks = step.querySelectorAll(".stepToggleLink");
if (!toggleLinks.length) return;

let label = "Setup";
if (step.classList.contains("open")) {
label = "Close";
} else if (step.dataset.completed === "true") {
label = "Manage";
}

toggleLinks.forEach((link) => {
link.textContent = label;
});
}

function syncStepUi(step) {
const textWrap = step.querySelector(".stepTextWrap");
const doneBtn = step.querySelector(".doneBtn");
const copyBtn = step.querySelector(".copyBtn");
const helper = step.querySelector(".stepHelper");

if (step.classList.contains("open")) {

if (step.dataset.completed === "true") {

if (textWrap) textWrap.classList.add("is-hidden");
if (doneBtn) doneBtn.style.display = "none";
if (copyBtn) copyBtn.style.display = "none";
if (helper) helper.style.display = "none";

} else {

if (textWrap) textWrap.classList.remove("is-hidden");
if (doneBtn) doneBtn.style.display = "";
if (copyBtn) copyBtn.style.display = "";
if (helper) helper.style.display = "";

}

} else {

if (textWrap) textWrap.classList.add("is-hidden");
if (doneBtn) doneBtn.style.display = "";
if (copyBtn) copyBtn.style.display = "";
if (helper) helper.style.display = "";

}
setToggleLabel(step);
}

function closeOtherOpenSteps(currentStep) {
steps.forEach((step) => {
if (step !== currentStep && step.classList.contains("open")) {
step.classList.remove("open");

if (step.dataset.completed === "true") {
step.classList.add("done");
step.classList.remove("locked");
} else {
step.classList.add("locked");
step.classList.remove("done");
}

syncStepUi(step);
}
});
}

function openNextStep(currentStep) {
const currentIndex = steps.indexOf(currentStep);

for (let i = currentIndex + 1; i < steps.length; i++) {
const nextStep = steps[i];

if (nextStep.dataset.completed !== "true") {
nextStep.classList.remove("locked");
openSetupStep(nextStep);
nextStep.scrollIntoView({ behavior: "smooth", block: "start" });
return;
}
}
}

function updateProgress() {
const completed = document.querySelectorAll(".setupStep.done").length;
const percent = (completed / TOTAL_STEPS) * 100;
const nextStep = Math.min(completed + 1, TOTAL_STEPS);
const attentionCard = document.getElementById("launchAttentionCard");

if (completed === TOTAL_STEPS) {
if (attentionCard) attentionCard.style.display = "none";
if (communityReadyCard) communityReadyCard.style.display = "block";
} else {
if (attentionCard) attentionCard.style.display = "block";
if (communityReadyCard) communityReadyCard.style.display = "none";
}

progressBar.style.width = `${percent}%`;
progressText.textContent =
completed === TOTAL_STEPS
? "All steps complete"
: `Step ${nextStep} of ${TOTAL_STEPS}`;
progressPercent.textContent = `${Math.round(percent)}% complete`;
}

function markStepDone(step) {
const textWrap = step.querySelector(".stepTextWrap");

step.dataset.completed = "true";

if (textWrap) {
textWrap.classList.add("is-hidden");
}

step.classList.remove("locked", "open");
step.classList.add("done");

syncStepUi(step);
updateProgress();
}

function openSetupStep(step) {
closeOtherOpenSteps(step);

step.classList.remove("locked", "open");
step.classList.add("open");

if (step.dataset.completed === "true") {
step.classList.add("done");
} else {
step.classList.remove("done");
}

syncStepUi(step);
}

function closeStep(step) {
step.classList.remove("open");

if (step.dataset.completed === "true") {
step.classList.add("done");
step.classList.remove("locked");
} else {
step.classList.add("locked");
step.classList.remove("done");
}

syncStepUi(step);
}

steps.forEach((step) => {
const doneBtn = step.querySelector(".doneBtn");
const toggleLink = step.querySelector(".stepToggleLink");
const copyBtn = step.querySelector(".copyBtn");
const textArea = step.querySelector("textarea");

if (step.classList.contains("done")) {
step.dataset.completed = "true";
}

syncStepUi(step);

if (doneBtn) {
doneBtn.addEventListener("click", () => {
step.dataset.completed = "true";
markStepDone(step);
openNextStep(step);
});
}

step.querySelectorAll(".stepToggleLink").forEach((toggleLink) => {
toggleLink.addEventListener("click", (e) => {
e.preventDefault();

if (step.classList.contains("open")) {
closeStep(step);
} else {
openSetupStep(step);
}
});
});


if (copyBtn && textArea) {
copyBtn.addEventListener("click", async () => {
const ok = await copyText(textArea.value.trim());
flashButtonText(copyBtn, ok ? "Copied" : "Copy failed");
});
}
});

updateProgress();
}

function setupFinancialState() {
const status =
storage.get("commonshub_stripe_status") || "not_connected";

const attentionCard = document.getElementById("financialAttentionCard");
const readyCard = document.getElementById("financialReadyCard");

const title = document.getElementById("financialAttentionTitle");
const text = document.getElementById("financialAttentionText");
const note = document.getElementById("financialAttentionNote");
const connectBtn = document.getElementById("connectStripeBtn");

const supportCard = document.getElementById("communitySupportCard");

if (!supportCard) return;
if (attentionCard) attentionCard.style.display = "block";
if (readyCard) readyCard.style.display = "none";

function setCardEnabled(card, enabled) {
if (!card) return;
card.style.opacity = enabled ? "1" : ".65";
card.style.pointerEvents = enabled ? "auto" : "none";
}

function showAttention(show) {
if (attentionCard) attentionCard.style.display = show ? "block" : "block";
}

if (readyCard) readyCard.style.display = "none";

if (status === "not_connected") {
if (title) title.textContent = "Connect Stripe to enable community support";
if (text) {
text.textContent =
"Payments go directly to your Stripe account. Once connected, you can configure monthly, yearly, and one-time support options.";
}
if (note) {
note.innerHTML =
"<b>Next:</b> Connect Stripe first, then configure how your community can support your work.";
}
if (connectBtn) {
connectBtn.textContent = "Connect Stripe";
connectBtn.href = "connect-stripe.html";
}

setCardEnabled(supportCard, false);
return;
}

if (status === "incomplete") {
if (title) title.textContent = "Finish Stripe setup";
if (text) {
text.textContent =
"Your Stripe setup was started but not completed yet. Finish onboarding to unlock community support settings.";
}
if (note) {
note.innerHTML =
"<b>Next:</b> Resume Stripe setup and complete the remaining steps.";
}
if (connectBtn) {
connectBtn.textContent = "Resume Stripe setup";
connectBtn.href = "connect-stripe.html";
}

setCardEnabled(supportCard, false);
return;
}

if (status === "pending_review") {
if (title) title.textContent = "Stripe connected — review in progress";
if (text) {
text.textContent =
"Stripe has your information, but the account may still need review or additional details before support can go live.";
}
if (note) {
note.innerHTML =
"<b>Next:</b> Check Stripe status and complete any remaining verification steps if requested.";
}
if (connectBtn) {
connectBtn.textContent = "Check Stripe status";
connectBtn.href = "connect-stripe.html";
}

setCardEnabled(supportCard, false);
return;
}

if (status === "connected") {
if (attentionCard) attentionCard.style.display = "none";
if (readyCard) readyCard.style.display = "block";

setCardEnabled(supportCard, true);
return;
}
}

function setupFinancialPrototypeControls() {
  const notConnectedBtn = document.getElementById("simulateStripeNotConnected");
  const connectedBtn = document.getElementById("simulateStripeConnected");
  const restrictedBtn = document.getElementById("simulateStripeRestricted");

  if (!notConnectedBtn && !connectedBtn && !restrictedBtn) return;

  const BUTTONS = [
    { el: notConnectedBtn, state: "not_connected", label: "Not connected" },
    { el: connectedBtn, state: "connected", label: "Connected" },
    { el: restrictedBtn, state: "incomplete", label: "Needs more info" },
  ];

  function renderPrototypeControls() {
    const currentState =
      storage.get("commonshub_stripe_status") || "not_connected";

    BUTTONS.forEach(({ el, state, label }) => {
      if (!el) return;

      const isActive = currentState === state;

      el.textContent = isActive
        ? `Current: ${label}`
        : `Simulate ${label.toLowerCase()}`;

      el.classList.remove("primary", "secondary");
      el.classList.add(isActive ? "primary" : "secondary");
      el.style.flex = "1";
    });
  }

  notConnectedBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    storage.set("commonshub_stripe_status", "not_connected");
    setupFinancialState();
    setupCommunitySupportControls();
    renderPrototypeControls();
  });

  connectedBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    storage.set("commonshub_stripe_status", "connected");
    setupFinancialState();
    setupCommunitySupportControls();
    renderPrototypeControls();
  });

  restrictedBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    storage.set("commonshub_stripe_status", "incomplete");
    setupFinancialState();
    setupCommunitySupportControls();
    renderPrototypeControls();
  });

  renderPrototypeControls();
}


function setupCommunitySupportControls() {
  const supportCard = document.getElementById("communitySupportCard");
  if (!supportCard) return;

  const monthlyToggle = document.getElementById("monthlySupportToggle");
  const yearlyToggle = document.getElementById("yearlySupportToggle");
  const oneTimeToggle = document.getElementById("oneTimeSupportToggle");
  const campaignToggle = document.getElementById("campaignSupportToggle");

  const supportHubActions = document.getElementById("supportHubActions");
  const supportLockedNote = document.getElementById("supportLockedNote");

  const monthlyAmount = document.getElementById("monthlyAmount");
  const yearlyAmount = document.getElementById("yearlyAmount");
  const oneTimeAmount = document.getElementById("oneTimeAmount");

  const monthlyFields = document.getElementById("monthlyFields");
  const yearlyFields = document.getElementById("yearlyFields");
  const oneTimeFields = document.getElementById("oneTimeFields");
  const campaignFields = document.getElementById("campaignFields");

  const campaignTitle = document.getElementById("campaignTitle");
  const campaignDescription = document.getElementById("campaignDescription");
  const campaignGoalAmount = document.getElementById("campaignGoalAmount");
  const campaignEndDate = document.getElementById("campaignEndDate");

  function stripeStatus() {
    return storage.get("commonshub_stripe_status") || "not_connected";
  }

  function supportEnabled() {
    return !!(
      monthlyToggle?.checked ||
      yearlyToggle?.checked ||
      oneTimeToggle?.checked ||
      campaignToggle?.checked
    );
  }

  function setInputsEnabled(enabled) {
    [
      monthlyToggle,
      yearlyToggle,
      oneTimeToggle,
      campaignToggle,
      monthlyAmount,
      yearlyAmount,
      oneTimeAmount,
      campaignTitle,
      campaignDescription,
      campaignGoalAmount,
      campaignEndDate
    ].forEach((el) => {
      if (!el) return;
      el.disabled = !enabled;
    });
  }

  function renderSupportUi() {
    const connected = stripeStatus() === "connected";

    setInputsEnabled(connected);

    supportCard.style.opacity = connected ? "1" : ".65";
    supportCard.style.pointerEvents = connected ? "auto" : "none";

    if (supportLockedNote) {
      supportLockedNote.style.display = connected ? "none" : "block";
    }

    if (monthlyFields) {
      monthlyFields.style.display =
        connected && monthlyToggle?.checked ? "block" : "none";
    }

    if (yearlyFields) {
      yearlyFields.style.display =
        connected && yearlyToggle?.checked ? "block" : "none";
    }

    if (oneTimeFields) {
      oneTimeFields.style.display =
        connected && oneTimeToggle?.checked ? "block" : "none";
    }

   if (campaignFields) {
  campaignFields.style.display =
    connected && campaignToggle?.checked ? "block" : "none";
}

    if (supportHubActions) {
      supportHubActions.style.display =
        connected && supportEnabled() ? "block" : "none";
    }
  }

  [monthlyToggle, yearlyToggle, oneTimeToggle, campaignToggle].forEach((toggle) => {
    if (!toggle || toggle.dataset.bound === "1") return;
    toggle.addEventListener("change", renderSupportUi);
    toggle.dataset.bound = "1";
  });

  renderSupportUi();
}


function setupContributionGateControl() {
  const badge = document.getElementById("joinPolicyBadge");
  const defaultNote = document.getElementById("joinPolicyDefaultNote");
  const dependencyNote = document.getElementById("joinPolicyDependencyNote");
  const warning = document.getElementById("joinPolicyWarning");

  const enableBtn = document.getElementById("enableContributionGateBtn");
  const cancelBtn = document.getElementById("cancelContributionGateBtn");
  const confirmBtn = document.getElementById("confirmContributionGateBtn");
  const disableBtn = document.getElementById("disableContributionGateBtn");

  const monthlyToggle = document.getElementById("monthlySupportToggle");
  const yearlyToggle = document.getElementById("yearlySupportToggle");
  const oneTimeToggle = document.getElementById("oneTimeSupportToggle");
  const campaignToggle = document.getElementById("campaignSupportToggle");

  if (!badge || !enableBtn || !cancelBtn || !confirmBtn || !disableBtn) return;

  const KEY = "commonshub_contribution_required_to_join";

  function hasQualifyingPath() {
    return !!(
      monthlyToggle?.checked ||
      yearlyToggle?.checked ||
      oneTimeToggle?.checked ||
      campaignToggle?.checked
    );
  }

  function isEnabled() {
    return storage.get(KEY) === "1";
  }

function render(confirming = false) {
  const enabled = isEnabled();
  const eligible = hasQualifyingPath();

  if (enabled) {
    badge.textContent = "Enabled";
    badge.style.display = "inline-flex";

    defaultNote.style.display = "none";
    dependencyNote.style.display = "none";
    warning.style.display = "block";

    enableBtn.style.display = "none";
    cancelBtn.style.display = "none";
    confirmBtn.style.display = "none";
    disableBtn.style.display = "inline-flex";
    return;
  }

  badge.textContent = "Invite after contribution";
  badge.style.display = "none";

  defaultNote.style.display = "block";
  dependencyNote.style.display = !eligible ? "block" : "none";

  if (!eligible) {
    warning.style.display = "none";

    enableBtn.style.display = "inline-flex";
    enableBtn.classList.add("disabled");
    enableBtn.style.pointerEvents = "none";
    enableBtn.style.opacity = ".45";

    cancelBtn.style.display = "none";
    confirmBtn.style.display = "none";
    disableBtn.style.display = "none";
    return;
  }

  enableBtn.classList.remove("disabled");
  enableBtn.style.pointerEvents = "auto";
  enableBtn.style.opacity = "1";

  if (confirming) {
    defaultNote.style.display = "none";
    dependencyNote.style.display = "none";
    warning.style.display = "block";

    enableBtn.style.display = "none";
    cancelBtn.style.display = "inline-flex";
    confirmBtn.style.display = "inline-flex";
    disableBtn.style.display = "none";
  } else {
    warning.style.display = "none";

    enableBtn.style.display = "inline-flex";
    cancelBtn.style.display = "none";
    confirmBtn.style.display = "none";
    disableBtn.style.display = "none";
  }
}

  enableBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!hasQualifyingPath()) return;
    render(true);
  });

  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    render(false);
  });

  confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    storage.set(KEY, "1");
    render(false);
  });

  disableBtn.addEventListener("click", (e) => {
    e.preventDefault();
    storage.remove(KEY);
    render(false);
  });

  [monthlyToggle, yearlyToggle, oneTimeToggle, campaignToggle].forEach((toggle) => {
    toggle?.addEventListener("change", () => render(false));
  });

  render(false);
}

function setupGraphicAssetUploads() {
  const profileInput = document.getElementById("profileImageUpload");
  const profilePreview = document.getElementById("profileImagePreview");

  const headerInput = document.getElementById("headerImageUpload");
  const headerPreview = document.getElementById("headerImagePreview");

  if (profileInput && profilePreview) {
    profileInput.addEventListener("change", () => {
      const file = profileInput.files && profileInput.files[0];
      if (!file) return;

      const url = URL.createObjectURL(file);
      profilePreview.textContent = "";
      profilePreview.style.backgroundImage = `url("${url}")`;
      profilePreview.style.backgroundSize = "cover";
      profilePreview.style.backgroundPosition = "center";
      profilePreview.style.backgroundRepeat = "no-repeat";
    });
  }

  if (headerInput && headerPreview) {
    headerInput.addEventListener("change", () => {
      const file = headerInput.files && headerInput.files[0];
      if (!file) return;

      const url = URL.createObjectURL(file);
      headerPreview.textContent = "";
      headerPreview.style.backgroundImage = `url("${url}")`;
      headerPreview.style.backgroundSize = "cover";
      headerPreview.style.backgroundPosition = "center";
      headerPreview.style.backgroundRepeat = "no-repeat";
    });
  }
}

function setupServerThumbnailUpload() {
  const bannerInput = document.getElementById('serverBannerUpload');
  const thumbnailPreview = document.getElementById('serverThumbnailPreview');

  if (bannerInput && thumbnailPreview) {
    bannerInput.addEventListener('change', () => {
      const file = bannerInput.files && bannerInput.files[0];
      if (!file) return;
      const url = URL.createObjectURL(file);
      thumbnailPreview.textContent = '';
      thumbnailPreview.style.backgroundImage = `url("${url}")`;
      thumbnailPreview.style.backgroundSize = 'cover';
      thumbnailPreview.style.backgroundPosition = 'center';
      thumbnailPreview.style.backgroundRepeat = 'no-repeat';
    });
  }
}

function setupFaviconAndAppIconUploads() {
  const favInput = document.getElementById('faviconUpload');
  const favPreview = document.getElementById('faviconPreview');
  if (favInput && favPreview) {
    favInput.addEventListener('change', () => {
      const file = favInput.files && favInput.files[0];
      if (!file) return;
      const url = URL.createObjectURL(file);
      favPreview.textContent = '';
      favPreview.style.backgroundImage = `url("${url}")`;
      favPreview.style.backgroundSize = 'cover';
      favPreview.style.backgroundPosition = 'center';
      favPreview.style.backgroundRepeat = 'no-repeat';
    });
  }

  const appInput = document.getElementById('appIconUpload');
  const appPreview = document.getElementById('appIconPreview');
  if (appInput && appPreview) {
    appInput.addEventListener('change', () => {
      const file = appInput.files && appInput.files[0];
      if (!file) return;
      const url = URL.createObjectURL(file);
      appPreview.textContent = '';
      appPreview.style.backgroundImage = `url("${url}")`;
      appPreview.style.backgroundSize = 'cover';
      appPreview.style.backgroundPosition = 'center';
      appPreview.style.backgroundRepeat = 'no-repeat';
      setupFaviconAndAppIconUploads();
    });
  }
}

// ----------------------------
// Init
// ----------------------------
setupNavToggle();
setupDashboardState();
setupDnsState();
setupMastodonAdminButtons();
setupChecklist();
setupInviteCopy();
setupResetHandlers();
setupFundingUi();
setupServiceTabs();
setupLaunchSteps();
setupContinueSetup();
setupFinancialState();
setupFinancialPrototypeControls();
setupCommunitySupportControls();
setupContributionGateControl();
setupGraphicAssetUploads();
setupServerThumbnailUpload();
})();
