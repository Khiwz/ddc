export const sendContactForm = async (data) => {
  const result = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });

  const output = await result.json();

  return output;
};
