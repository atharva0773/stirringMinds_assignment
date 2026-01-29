const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000/api";



export async function fetchDeals() {
  const res = await fetch(`${API_BASE}/deals`);
  if (!res.ok) {
    throw new Error("Failed to fetch deals");
  }
  return res.json();
}

// authenticated

export async function loginUser(email: string, password: string) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data; // { token }
}

export async function registerUser(
  name: string,
  email: string,
  password: string
) {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Registration failed");
  }

  return data; // { token }
}


export async function claimDeal(dealId: string, token: string) {
  const res = await fetch(`${API_BASE}/claims`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ dealId }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Claim failed");
  }

  return data;
}

export async function fetchMyClaims(token: string) {
  const res = await fetch(`${API_BASE}/claims/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch claims");
  }

  return data;
}
