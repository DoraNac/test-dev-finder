const API_URL = "https://api.github.com/users/";

export const fetchGitHubUser = async (username) => {
  try {
    const response = await fetch(`${API_URL}${username}`);
    if (!response.ok) {
      throw new Error("User not found");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
