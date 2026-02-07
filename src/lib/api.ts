import axios from "axios";

export const API_BASE_URL = "https://my.asib-hasan.com";
export const ASSET_BASE_URL = "https://my.asib-hasan.com";

export const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
});

export const assetUrl = (path?: string | null) => {
  if (!path) {
    return "";
  }
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${ASSET_BASE_URL}${normalized}`;
};
