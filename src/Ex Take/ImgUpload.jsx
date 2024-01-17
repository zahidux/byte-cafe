//go to imgbb then collects api key - 9456703bb26d6b1ead19cc646eaedb83
//then go to .env.local file -   VITE_Image_Upload_Token=9456703bb26d6b1ead19cc646eaedb83
//then fo to upload field component above use it - const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
// use it on component -   const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=YOUR_CLIENT_API_KEY=${img_hosting_token}`;
