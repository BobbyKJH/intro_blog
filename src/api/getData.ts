import axios from "axios";

/** Ex */
export const getSandwich = async () => {
  try {
    const res = await axios.get("https://bobbykjh.github.io/subway/sandwich.json");
    const data = res.data;
    return data
  } catch (err) {
    console.error(err)
  }
}