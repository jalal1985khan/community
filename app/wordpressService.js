"use client"
import axios from 'axios';

const baseUrl = 'https://beta.communityactioncollab.org/wp-json/wp/v2';

export const getBlogPosts = async () => {
  try {
    const response = await axios.get(`${baseUrl}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};
