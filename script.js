const craftsWithImages = {
  "Director": "https://resurface.audio/wp-content/uploads/AdobeStock_119423351.jpeg",
  "Producer": "https://tse2.mm.bing.net/th/id/OIP.4coOUDPnsA_xD6ux1Nu7ZgHaE7?pid=Api&P=0&h=180",
  "Screenwriter": "https://png.pngtree.com/png-clipart/20221019/original/pngtree-tiny-male-author-or-screenwriter-writing-story-or-movie-script-png-image_8705209.png",
  "Cinematographer": "https://static8.depositphotos.com/1370441/847/i/950/depositphotos_8471294-stock-photo-camera-man-professional-cinematographer-at.jpg",
  "Editor": "https://tse1.mm.bing.net/th/id/OIP.KbwtZ8l8XB8kahw4oDpXrQHaEK?pid=Api&P=0&h=180",
  "Music Director": "https://welcome.marquee.tv/app/uploads/2023/04/Film-Composers-e1708013527348.png",
  "Art Director": "https://wallpaperaccess.com/full/2495971.png",
  "Costume Designer": "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/48438/article_aligned%402x.jpg",
  "Makeup Artist": "https://wallpapercave.com/wp/wp7387603.jpg",
  "Choreographer": "https://www.filmconnection.com/wp-content/uploads/what-does-a-choreographer-do-small.jpg",
  "Sound Designer": "https://www.thefilmfund.co/wp-content/uploads/2020/06/denisse-leon-n4BDkIEls78-unsplash-1000x667.jpg",
  "VFX Artist": "https://www.animationkolkata.com/blog/wp-content/uploads/2020/10/08Zj-QI5FSE275nWs.jpg",
  "Stunt Coordinator": "https://www.frontrowinsurance.com/hubfs/blog-image-uploads/stunt%20insurance/stunt-shutterstock_1421148581-forweb600.jpg",
  "Assistant Director": "https://tse4.mm.bing.net/th/id/OIP.JiikHJiUKZFbti04A0OjgQHaFO?pid=Api&P=0&h=180",
  "Production Designer": "https://wallpaperaccess.com/full/5681057.jpg",
  "Casting Director": "https://img.freepik.com/premium-vector/casting-vector-movie-producing-film-direction_103044-3725.jpg?w=2000",
  "Lighting Technician": "https://www.budapestreporter.com/wp-content/uploads/2022/08/btl-workers-of-the-film-industry-the-lighting-technician-budapestreporter-2022-08-11_050002.png",
  "Colorist": "https://blog.fmctraining.com/hs-fs/hubfs/colorist%20film.jpg?width=1170&name=colorist%20film.jpg",
  "Storyboarding Artist": "https://filmlifestyle.com/wp-content/uploads/2022/04/movie-storyboard52.jpg",
  "Publicity Designer": "https://c.wallhere.com/photos/f6/30/switzerland_lausanne_monochrome_street_men_publicity_light_shadow-602899.jpg!d",
  "Location Manager": "https://www.irishtimes.com/resizer/5vdj2J5XBghHUaj2XtunhtGvXDk=/1600x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/LQLPVZ4B4POGCLOHCDGYYMVR6Q.jpg",
  "Dialogue Writer": "https://www.freelancewriting.com/wp-content/uploads/2016/07/script-writing-for-films-1.jpg",
  "Still Photographer": "https://www.69dropsstudio.co.uk/wp-content/uploads/2018/10/photography-in-movies.jpg",
  "Production Assistant": "https://filmlifestyle.com/wp-content/uploads/2022/04/Production-Assistant52.jpg"
};

const grid = document.getElementById('craftGrid');

Object.keys(craftsWithImages).forEach(craft => {
  const item = document.createElement('div');
  item.className = 'craft-item';
  item.onclick = () => {
    // Save the selected craft to local storage
    localStorage.setItem('selectedCraft', craft);

    // Redirect to the apply page
    window.location.href = `apply.html`;
  };

  const img = document.createElement('img');
  img.src = craftsWithImages[craft];
  img.alt = craft;

  const name = document.createElement('div');
  name.className = 'craft-name';
  name.textContent = craft;

  item.appendChild(img);
  item.appendChild(name);
  grid.appendChild(item);
});