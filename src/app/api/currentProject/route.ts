import { NextResponse } from "next/server";

export async function GET() {
  const call = await fetch(
    "https://api.github.com/users/KshSiaan/repos?sort=created&direction=desc"
  );
  const res = await call.json();

  if (!call.ok) {
    return NextResponse.json(
      {
        message: res.message ?? "Failed to fetch dataset from repo",
        ok: false,
        data: null,
      },
      { status: 400 }
    );
  }
  return NextResponse.json(
    {
      message: res.message ?? "Successfully fetched the repo",
      ok: true,
      data: res[0],
    },
    { status: 200 }
  );
}
