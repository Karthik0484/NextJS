export async function GET() {
  const users = [
    { id: 1, name: "Karthik", role: "Developer" },
    { id: 2, name: "David", role: "Designer" },
    { id: 3, name: "Smith", role: "Manager" }
  ];

  return Response.json(users);
}