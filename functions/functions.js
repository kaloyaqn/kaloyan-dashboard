export default async function handleLogout() {
    try {
      await fetch('api/user/logout', {
        method: "POST",
      });

      router.push("/login");
    } catch (e) {
      console.error('Logout failed',e)
    }
  }