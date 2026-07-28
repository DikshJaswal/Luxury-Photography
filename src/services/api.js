export const submitLead = async (payload) => {
  return {
    ok: true,
    mode: "demo",
    payload,
  };
};

export const getAdminStatus = () => ({
  enabled: false,
  message: "Admin panel will be connected later.",
});
