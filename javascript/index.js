(function () {
  const apps = [
    {
      id: 1,
      title: "Dual Camera",
      name: "Dual Camera",
      icon: "fa-camera",
      desc: "Dual Camera is an Android camera application that enables simultaneous photo and video capture using both front and back cameras, and also lets you take pictures while recording videos.",
      videoFile: "DualCamera.mp4", 
      apkFile: "apk/DualCamera.apk",
      sourcePrice: "Free",
      amazonLink: "https://www.amazon.com/gp/product/B0H951HYVK",
      itchLink: "https://bs-enterprise-guyana.itch.io/dual-camera",
      apkpureLink: "https://apkpure.com/p/com.bsent.dual_camera",
      uptodownLink: "https://apkpure.com/p/com.bsent.dual_camera"
    },
    {
      id: 2,
      title: "Dual Camera Pro",
      name: "Dual Camera Pro",
      icon: "fa-camera",
      desc: "Dual Camera Pro is an Android camera application that enables simultaneous photo and video capture using both front and back cameras, and also lets you take pictures while recording videos. The app creates a split-screen view showing both camera feeds in real time.",
      videoFile: "DualCameraPro.mp4", 
      sourcePrice: "$3,000 GYD / $4.99 USD",
      mmgLink: "cam.html",
      amazonLink: "https://www.amazon.com/gp/product/B0H951HYVK",
      itchLink: "https://bs-enterprise-guyana.itch.io/dual-camera",
      huaweiLink: "https://appgallery.huawei.com/app/C118598591"
    },
    {
      id: 3,
      title: "Split Screen Browser For TV",
      name: "Split Screen Browser For TV",
      icon: "fa-tv",
      desc: "Split Screen Browser For TV lets the user split web browsing into two separate browsing screens. You can surf and watch your favorite websites at the same time.",
      videoFile: "SplitScreenTV.mp4", 
      apkFile: "apk/SplitScreen.apk",
      sourcePrice: "Free",
      itchLink: "https://bs-enterprise-guyana.itch.io/split-screen-browser-for-tv",
      apkpureLink: "https://apkpure.com/p/com.bsent.splitscreenbrowserfortv"
    },
    {
      id: 4,
      title: "Split Screen Browser For TV Pro",
      name: "Split Screen Browser For TV Pro",
      icon: "fa-tv",
      desc: "Split Screen Browser For TV Pro lets the user split web browsing into two, three, or four separate screens so you can surf and watch multiple websites at the same time.",
      videoFile: "SplitScreenTVPro.mp4", 
      sourcePrice: "$3,000 GYD / $5.99 USD",
      mmgLink: "screen.html",
      itchLink: "https://bs-enterprise-guyana.itch.io/split-screen-browser-for-tv-pro"
    },
    {
      id: 5,
      title: "Laws of Guyana - Online",
      name: "Laws of Guyana - Online",
      icon: "fa-scale-balanced",
      desc: "Laws of Guyana is an independent, educational mobile app that provides the full text of Guyana Acts of Parliament for online use. It is designed for legal professionals, students, researchers, and anyone needing reliable access to Guyanese legislation in classrooms. This disclaimer states that the app is an independent educational tool with no official connection to the Government of Guyana, Parliament, or Ministry of Legal Affairs. Its legal content comes from public official sources like the Ministry of Legal Affairs website and published Acts of Parliament. While the developer tries to keep information accurate, the app is not legal advice and the developer is not liable for how the information is used. For official legal matters, users should consult the Official Gazette or the Ministry of Legal Affairs directly.",
      videoFile: "LAwsofGuyanaOnline.mp4", 
      apkFile: "https://drive.google.com/file/d/1SaHJ7CJ9wlJOVyBauNsBw8oO2Ggpb2ZA/view?usp=sharing",
      sourcePrice: "Free",
      itchLink: "https://bs-enterprise-guyana.itch.io/laws-of-guyana-online",
      apkpureLink: "https://apkpure.com/p/com.bsent.lawsofguyana_online"
    },
    {
      id: 6,
      title: "Laws of Guyana - Offline",
      name: "Laws of Guyana - Offline",
      icon: "fa-scale-balanced",
      desc: "Laws of Guyana is an independent, educational mobile app that provides the full text of Guyana Acts of Parliament for offline use. It is designed for legal professionals, students, researchers, and anyone needing reliable access to Guyanese legislation in classrooms or remote areas with poor connectivity. This disclaimer states that the app is an independent educational tool with no official connection to the Government of Guyana, Parliament, or Ministry of Legal Affairs. Its legal content comes from public official sources like the Ministry of Legal Affairs website and published Acts of Parliament. While the developer tries to keep information accurate, the app is not legal advice and the developer is not liable for how the information is used. For official legal matters, users should consult the Official Gazette or the Ministry of Legal Affairs directly.",
      videoFile: "LAwsofGuyanaOffline.mp4", 
      sourcePrice: "$3,000 GYD",
      mmgLink: "laws.html"
    }
  ];

  const grid = document.getElementById("appGrid");
  const appNamesList = document.getElementById("appNamesList");

  function renderAppNamesBar() {
    if (!appNamesList) return;
    appNamesList.innerHTML = "";
    apps.forEach((app) => {
      const chip = document.createElement("span");
      chip.className = "app-name-chip";
      chip.setAttribute("role", "button");
      chip.setAttribute("tabindex", "0");
      chip.setAttribute("data-app-id", app.id);
      chip.innerHTML = `<i class="fas ${app.icon}"></i>${app.name}`;

      chip.addEventListener("click", () => scrollToApp(app.id));
      chip.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          scrollToApp(app.id);
        }
      });

      appNamesList.appendChild(chip);
    });
  }

  function scrollToApp(appId) {
    const card = document.querySelector(`.app-card[data-app-id="${appId}"]`);
    if (!card) return;

    card.scrollIntoView({ behavior: "smooth", block: "center" });

    document.querySelectorAll(".app-card.highlight").forEach((el) => {
      el.classList.remove("highlight");
    });

    setTimeout(() => {
      card.classList.add("highlight");
    }, 350);

    setTimeout(() => {
      card.classList.remove("highlight");
    }, 2000);
  }

  function renderApps() {
    grid.innerHTML = "";

    let html = "";
    apps.forEach((app) => {
      const videoPath = app.videoFile ? `videos/${app.videoFile}` : "";
      html += `
        <div class="app-card" data-app-id="${app.id}">
          ${
            videoPath
              ? `<div class="video-wrapper" data-video="${videoPath}">
                   <video muted loop playsinline preload="metadata">
                     <source src="${videoPath}" type="video/mp4">
                     Your browser does not support the video tag.
                   </video>
                   <div class="play-overlay">
                     <i class="fas fa-play-circle"></i>
                   </div>
                 </div>`
              : ""
          }
          <div class="card-content">
            <div class="card-header">
              <h3><i class="fas ${app.icon}"></i> ${app.name}</h3>
              <span class="price-badge"><i class="fas fa-tag"></i> ${app.sourcePrice}</span>
            </div>
            <p class="app-desc">${app.desc}</p>
            <div class="action-row">
              ${app.apkFile ? `<a href="#" class="download-btn" data-apk="${app.apkFile}" title="Download APK"><i class="fas fa-download"></i> Download</a>` : ""}
              ${app.mmgLink ? `<a href="${app.mmgLink}" class="store-btn amazon" title="MMG"><i class="fas fa-wallet"></i> MMG</a>` : ""}
              ${app.amazonLink ? `<a href="${app.amazonLink}" class="store-btn amazon" target="_blank" rel="noopener" title="Amazon Store"><i class="fab fa-amazon"></i> Store</a>` : ""}
              ${app.itchLink ? `<a href="${app.itchLink}" class="store-btn itch" target="_blank" rel="noopener" title="Itch.io"><i class="fas fa-store"></i> Itch.io</a>` : ""}
              ${app.huaweiLink ? `<a href="${app.huaweiLink}" class="store-btn itch" target="_blank" rel="noopener" title="Huawei"><i class="fas fa-store"></i> Huawei</a>` : ""}
              ${app.apkpureLink ? `<a href="${app.apkpureLink}" class="store-btn itch" target="_blank" rel="noopener" title="APKPure"><i class="fas fa-store"></i> APKPure</a>` : ""}
              ${app.uptodownLink ? `<a href="${app.uptodownLink}" class="store-btn itch" target="_blank" rel="noopener" title="Uptodown"><i class="fas fa-store"></i> Uptodown</a>` : ""}
              ${app.playLink ? `<a href="${app.playLink}" class="store-btn google" target="_blank" rel="noopener" title="Google Play"><i class="fab fa-google-play"></i> Play</a>` : ""}
              ${app.samsungLink ? `<a href="${app.samsungLink}" class="store-btn samsung" target="_blank" rel="noopener" title="Samsung Galaxy"><i class="fas fa-store"></i> Galaxy</a>` : ""}
              ${app.sourceLink ? `<a href="${app.sourceLink}" class="source-btn" title="Buy source"><i class="fas fa-code"></i> Source</a>` : ""}
            </div>
          </div>
        </div>
      `;
    });
    grid.innerHTML = html;

    attachVideoHandlers();
    attachDownloadHandlers();
  }

  function attachVideoHandlers() {
    document.querySelectorAll(".video-wrapper").forEach((wrapper) => {
      const video = wrapper.querySelector("video");
      const overlay = wrapper.querySelector(".play-overlay");
      if (!video) return;

      wrapper.addEventListener("click", (e) => {
        e.stopPropagation();
        if (video.muted) video.muted = false;
        if (video.paused) {
          video.play().catch(() => {});
          if (overlay) overlay.style.opacity = "0";
        } else {
          video.pause();
          if (overlay) overlay.style.opacity = "0.9";
        }
      });

      wrapper.addEventListener("mouseenter", () => {
        video.muted = false;
        video.play().catch(() => {});
        if (overlay) overlay.style.opacity = "0";
      });

      wrapper.addEventListener("mouseleave", () => {
        video.pause();
        if (overlay) overlay.style.opacity = "0.9";
      });

      video.addEventListener("ended", () => {
        if (overlay) overlay.style.opacity = "0.9";
      });
    });
  }

  function attachDownloadHandlers() {
    document.querySelectorAll(".download-btn").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const apkPath = this.getAttribute("data-apk");
        if (!apkPath) return;
        const link = document.createElement("a");
        link.href = apkPath;
        link.download = apkPath.split("/").pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    });
  }

  renderAppNamesBar();
  renderApps();

  const modal = document.getElementById("contactModal");
  const openBtn = document.getElementById("openContactBtn");
  const closeBtn = document.getElementById("closeModalBtn");
  const sellCta = document.getElementById("sellCtaBtn");

  function openModal() {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (openBtn) openBtn.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  if (sellCta) {
    sellCta.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "index1.html";
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closeModal();
    }
  });
})();