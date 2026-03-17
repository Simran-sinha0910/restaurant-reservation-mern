const activeAdminTokens = new Set();

export function issueAdminToken() {
  const token = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  activeAdminTokens.add(token);
  return token;
}

export function isValidAdminToken(token) {
  return Boolean(token) && activeAdminTokens.has(token);
}

