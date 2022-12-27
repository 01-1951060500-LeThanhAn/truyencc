const express = require("express");
const cors = require("cors");
const axios = require("axios");
const cheerio = require("cheerio");
const dotenv = require("dotenv");
const { response } = require("express");

//SET UP
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());
dotenv.config();
app.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.get("/truyen/category/truyen-moi-cap-nhat", (req, resp) => {
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);
  const thumbnails = [];
  const data = [];

  try {
    axios(`https://truyencc.com/truyen-moi-cap-nhat?page=${page}`).then(
      (res) => {
        const html = res.data;
        const $ = cheerio.load(html);
        $(".tile-story", html).each(function () {
          const name = $(this).find("a img").attr("alt");
          const url = $(this).find(" a").attr("href");
          const image = $(this).find("a img").attr("src");
          const slug = url.split("/truyen-tranh")[1];

          thumbnails.push({
            name: name,
            slug: slug.replace("/", "").replace("/", ""),
            url:
              "https://thanhan-baotang.vercel.app/comic/" +
              slug.replace("/", ""),

            image: image,
          });
        });

        $(".pagination", html).each(function () {
          const count = $(this).find(".hidden-xs > a").text();

          data.push({
            thumbnails: thumbnails,
            countPages: +count,
          });
        });

        if (limit && limit > 0) {
          resp.status(200).json(data.slice(0, limit));
        } else {
          resp.status(200).json(data);
        }
      }
    );
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/truyen/category/truyen-full", (req, resp) => {
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);
  const thumbnails = [];
  const data = [];

  try {
    axios(`https://truyencc.com/truyen-full?page=${page}`).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $(".tile-story", html).each(function () {
        const name = $(this).find("a img").attr("alt");
        const url = $(this).find(" a").attr("href");
        const image = $(this).find("a img").attr("src");
        const slug = url.split("/truyen-tranh")[1];

        thumbnails.push({
          name: name,
          slug: slug.replace("/", "").replace("/", ""),
          url: "https://thanhan-baotang.vercel.app/comic" + slug,

          image: image,
        });
      });
      $(".pagination", html).each(function () {
        const count = $(this).find(".hidden-xs > a").text();

        data.push({
          thumbnails: thumbnails,
          countPages: +count,
        });
      });

      if (limit && limit > 0) {
        resp.status(200).json(data.slice(0, limit));
      } else {
        resp.status(200).json(data);
      }
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/truyen/category/truyen-tranh-moi", (req, resp) => {
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);
  const thumbnails = [];
  const data = [];

  try {
    axios(`https://truyencc.com/truyen-tranh-moi?page=${page}`).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $(".tile-story", html).each(function () {
        const name = $(this).find("a img").attr("alt");
        const url = $(this).find(" a").attr("href");
        const image = $(this).find("a img").attr("src");
        const slug = url.split("/truyen-tranh")[1];

        thumbnails.push({
          name: name,
          slug: slug.replace("/", "").replace("/", ""),
          url: "https://thanhan-baotang.vercel.app/comic" + slug,

          image: image,
        });
      });
      $(".pagination", html).each(function () {
        const count = $(this).find(".hidden-xs > a").text();

        data.push({
          thumbnails: thumbnails,
          countPages: +count,
        });
      });

      if (limit && limit > 0) {
        resp.status(200).json(data.slice(0, limit));
      } else {
        resp.status(200).json(data);
      }
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/truyen/category/truyen-yeu-thich", (req, resp) => {
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);
  const thumbnails = [];
  const data = [];

  try {
    axios(`https://truyencc.com/truyen-yeu-thich?page=${page}`).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $(".tile-story", html).each(function () {
        const name = $(this).find("a img").attr("alt");
        const url = $(this).find(" a").attr("href");
        const image = $(this).find("a img").attr("src");
        const slug = url.split("/truyen-tranh")[1];

        thumbnails.push({
          name: name,
          slug: slug.replace("/", "").replace("/", ""),
          url: "https://thanhan-baotang.vercel.app/comic" + slug,

          image: image,
        });
      });

      $(".pagination", html).each(function () {
        const count = $(this).find(".hidden-xs > a").text();

        data.push({
          thumbnails: thumbnails,
          countPages: +count,
        });
      });

      if (limit && limit > 0) {
        resp.status(200).json(data.slice(0, limit));
      } else {
        resp.status(200).json(data);
      }
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/truyen-con-trai", (req, resp) => {
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);
  const thumbnails = [];
  const data = [];

  try {
    axios(`https://truyencc.com/truyen-con-trai?page=${page}`).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $(".tile-story", html).each(function () {
        const name = $(this).find("a img").attr("alt");
        const url = $(this).find(" a").attr("href");
        const image = $(this).find("a img").attr("src");
        const slug = url.split("/truyen-tranh")[1];

        thumbnails.push({
          name: name,
          slug: slug.replace("/", "").replace("/", ""),
          url: "https://thanhan-baotang.vercel.app/comic" + slug,

          image: image,
        });
      });
      $(".pagination", html).each(function () {
        const count = $(this).find(".hidden-xs > a").text();

        data.push({
          thumbnails: thumbnails,
          countPages: +count,
        });
      });

      if (limit && limit > 0) {
        resp.status(200).json(data.slice(0, limit));
      } else {
        resp.status(200).json(data);
      }
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/comic/:character", (req, resp) => {
  let url = "https://truyencc.com/truyen-tranh/" + req.params.character;
  const characters = [];
  const data = [];
  const listChapters = [];
  const actions = [];
  console.log(url);

  try {
    axios(url).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);

      $(".overview-story", html).each(function () {
        const images = $(this).find(".img img").attr("src");
        const name = $(this).find(".text h1").text();
        const namemore = $(this)
          .find(".text .txt .info-item:first-child")
          .text();
        const tinhtrang = $(this)
          .find(".text .txt .info-item:nth-child(2)")
          .text();
        const translate = $(this)
          .find(".text .txt .info-item:nth-child(3)")
          .text();
        const author = $(this)
          .find(".text .txt .info-item:nth-child(4)")
          .text();
        const like = $(this).find(".text .txt span .number-like").text();
        const love = $(this).find(".text .txt .sp01:nth-child(3) span").text();
        const view = $(this).find(".text .txt .sp01:nth-child(4) span").text();
        const description = $(this).find(".text .story-detail-info").text();
        //GET ACTIONS

        $(this)
          .find(".list-tag-story li > a")
          .each(function () {
            const category = $(this).text();
            const href = $(this).attr("href");

            actions.push({
              category: category,

              action:
                "https://live-thanhan.vercel.app/tim-truyen" +
                href.split("/the-loai")[1],
            });
          });

        characters.push({
          images: images,
          name: name,
          namemore: namemore,
          tinhtrang: tinhtrang,
          translate: translate,
          author: author,
          like: like,
          love: love,
          view: view,
          actions: actions,
          description: description,
        });
      });

      $(".list-chapters .box-list .chapter-item", html).each(function () {
        const title = $(this).find("a").text();
        const href = $(this).find("a").attr("href");
        const debut = $(this).find("div:last-child").text();
        const links = href.split("/truyen-tranh")[1];
        const newLinks = links.split("/")[1];
        const nextLinks = links.split("/")[2];
        listChapters.push({
          title: title,
          debut: debut,
          nextLinks: nextLinks,
          newLinks: newLinks,
          href:
            "https://thanhan-baotang.vercel.app/comic" +
            "/" +
            newLinks +
            "/" +
            nextLinks,
        });
      });

      data.push({
        thumbnails: characters,
        listChapters: listChapters,
      });

      resp.status(200).json(data);
    });
  } catch (err) {
    resp.status(500).json(err);
  }
});

app.get("/truyen-con-gai", (req, resp) => {
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);
  const thumbnails = [];
  const data = [];

  try {
    axios(`https://truyencc.com/truyen-con-gai?page=${page}`).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $(".tile-story", html).each(function () {
        const name = $(this).find("a img").attr("alt");
        const url = $(this).find(" a").attr("href");
        const image = $(this).find("a img").attr("src");
        const slug = url.split("/truyen-tranh")[1];

        thumbnails.push({
          name: name,
          slug: slug.replace("/", "").replace("/", ""),
          url: "https://thanhan-baotang.vercel.app/comic" + slug,

          image: image,
        });
      });
      $(".pagination", html).each(function () {
        const count = $(this).find(".hidden-xs > a").text();

        data.push({
          thumbnails: thumbnails,
          countPages: +count,
        });
      });

      if (limit && limit > 0) {
        resp.status(200).json(data.slice(0, limit));
      } else {
        resp.status(200).json(data);
      }
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/comic/:newLinks/:nextLinks", (req, resp) => {
  let url =
    "https://truyencc.com/truyen-tranh" +
    "/" +
    req.params.newLinks +
    "/" +
    req.params.nextLinks;

  console.log(url);

  const images = [];
  const detailChapter = [];
  const allChapters = [];

  try {
    axios(url).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $("img", html).each(function () {
        const image = $(this).attr("data-ec1");

        images.push(image);
      });

      $("select option", html).each(function () {
        const title = $(this).text();

        const href = $(this).attr("value");
        const data = href.split("/truyen-tranh")[1];
        const chap = data.split("/")[1];
        const nextChap = data.split("/")[2];

        allChapters.push({
          title: title,
          chap: chap,
          nextChap: nextChap,
          href:
            "https://thanhan-baotang.vercel.app/comic/" + chap + "/" + nextChap,
        });
      });
      detailChapter.push({
        listImages: images,
        selectChapter: allChapters,
      });

      resp.status(200).json(detailChapter);
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/truyen/the-loai", (req, resp) => {
  const genres = [];

  try {
    axios(`https://truyencc.com`).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $(".dropdown-left .mega-list li", html).each(function () {
        const titles = $(this).find("a").attr("href");
        const name = $(this).find("a").text();
        genres.push({
          params: titles.split("/")[2],
          name: name,
        });
      });

      resp.status(200).json(genres);
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/truyen/the-loai/:action", (req, resp) => {
  let url = "https://truyencc.com/the-loai/" + req.params.action;
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);
  const thumbnails = [];
  const data = [];

  try {
    axios(`${url}?page=${page}`).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $(".tile-story", html).each(function () {
        const name = $(this).find("a img").attr("alt");
        const url = $(this).find(" a").attr("href");
        const image = $(this).find("a img").attr("src");
        const slug = url.split("/truyen-tranh")[1];

        thumbnails.push({
          name: name,
          slug: slug.replace("/", "").replace("/", ""),
          url: "https://thanhan-baotang.vercel.app/comic" + slug,

          image: image,
        });
      });

      $(".pagination", html).each(function () {
        const count = $(this).find(".hidden-xs > a").text();

        data.push({
          thumbnails: thumbnails,
          countPages: +count,
        });
      });

      if (limit && limit > 0) {
        resp.status(200).json(data.slice(0, limit));
      } else {
        resp.status(200).json(data);
      }
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/search/:keyword", (req, resp) => {
  const page = req.query.page;
  const limit = Number(req.query.limit);
  const thumbnails = [];
  const data = [];
  const url = `https://comic24hzz.com/tim-kiem?keyword=${req.params.keyword
    .toLowerCase()
    .replace(/\s/g, "+")}&page=${page}`;
  console.log(url);
  try {
    axios(url).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $(".item", html).each(function () {
        const name = $(this).find(".image a img").attr("alt");
        const url = $(this).find(".image a").attr("href");
        const image = $(this).find(".image a img").attr("data-src");
        const slug = url
          .split("/truyen-tranh")[1]
          .replace("/", "")
          .replace("/", "");
        const one = slug.split("-");
        const main = one.pop();

        thumbnails.push({
          name: name,
          url: "https://thanhan-baotang.vercel.app/comic/" + one.join("-"),
          slug: one.join("-"),
          image: image,
        });
      });

      data.push({
        thumbnails: thumbnails,
        countPages: 10,
      });

      if (limit && limit > 0) {
        resp.status(200).json(data.slice(0, limit));
      } else {
        resp.status(200).json(data);
      }
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

// app.get("/search/:keyword", (req, resp) => {
//   const page = req.query.page;
//   const limit = Number(req.query.limit);
//   const thumbnails = [];
//   const data = [];
//   const url = `https://toptruyen.info/tim-truyen?keyword=${req.params.keyword
//     .toLowerCase()
//     .replace(/\s/g, "+")}`;
//   console.log(url);
//   try {
//     axios(url).then((res) => {
//       const html = res.data;
//       const $ = cheerio.load(html);
//       $(".item-manga .item ", html).each(function () {
//         const name = $(this).find(" .image-item a").attr("title");
//         const url = $(this).find(" .image-item a").attr("href");
//         const image =
//           $(this).find(" .image-item a img").attr("data-original") ||
//           $(this).find(" .image-item a img").attr("src");
//         const slug = String(url).split("/truyen-tranh")[1];
//         const newSlug = String(slug).split("/")[1];
//         const nextSlug = String(slug).split("/")[2];

//         thumbnails.push({
//           name: name,
//           url: "https://thanhan-baotang.vercel.app/comic/" + newSlug,
//           newSlug: newSlug,
//           nextSlug: nextSlug,
//           image: image,
//         });
//       });

//       data.push({
//         thumbnails: thumbnails,
//       });
//       if (limit && limit > 0) {
//         resp.status(200).json(data.slice(0, limit));
//       } else {
//         resp.status(200).json(data);
//       }
//     });
//   } catch (error) {
//     resp.status(500).json(error);
//   }
// });

app.get("/truyen/quoc-gia", (req, resp) => {
  const genres = [];

  try {
    axios(`https://truyencc.com`).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $(".style-2 .mega-list li", html).each(function () {
        const titles = $(this).find("a").attr("href");
        const name = $(this).find("a").text();
        genres.push({
          country: titles.split("/")[4],
          name: name,
        });
      });

      resp.status(200).json(genres.slice(0, 5));
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/truyen/quoc-gia/:country", (req, resp) => {
  let url = "https://truyencc.com/quoc-gia/" + req.params.country;
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);
  const thumbnails = [];
  const data = [];

  try {
    axios(`${url}?page=${page}`).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $(".tile-story", html).each(function () {
        const name = $(this).find("a img").attr("alt");
        const url = $(this).find(" a").attr("href");
        const image = $(this).find("a img").attr("src");
        const slug = url.split("/truyen-tranh")[1];

        thumbnails.push({
          name: name,
          slug: slug.replace("/", "").replace("/", ""),
          url: "https://thanhan-baotang.vercel.app/comic" + slug,

          image: image,
        });
      });

      $(".pagination", html).each(function () {
        const count = $(this).find(".hidden-xs > a").text();

        data.push({
          thumbnails: thumbnails,
          countPages: +count,
        });
      });

      if (limit && limit > 0) {
        resp.status(200).json(data.slice(0, limit));
      } else {
        resp.status(200).json(data);
      }
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

app.get("/truyen/category", (req, resp) => {
  const genres = [];

  try {
    axios(`https://truyencc.com`).then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $(".style-2 .mega-list li", html).each(function () {
        const titles = $(this).find("a").attr("href");
        const name = $(this).find("a").text();
        genres.push({
          sort: titles.split("/")[3],
          name: name,
        });
      });

      resp.status(200).json(genres.slice(5));
    });
  } catch (error) {
    resp.status(500).json(error);
  }
});

//PORT
app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running");
});
