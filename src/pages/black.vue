<template>
    <div class="container">
      <div class="image-container">
        <img
          :src="imageSrc"
          class="main-image"
          alt="흑임자 크림 콜드 브루"
          @mousemove="zoomImage"
          @mouseleave="resetZoom"
        />
        <div
          class="zoom-overlay"
          :style="overlayStyle"
        ></div>
      </div>
      <div class="text-container">
        <h2>흑임자 크림 콜드 브루</h2>
        <p>고소한 흑임자와 콜드 브루의 조화로운 맛을 즐겨보세요.</p>
        <RouterLink to="/black">자세히 보기</RouterLink>
        <div class="zoomed-image" :style="zoomStyle"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imageSrc: "https://image.istarbucks.co.kr/upload/store/skuimg/2024/07/[9200000005378]_20240701133238491.jpg",
        zoomStyle: {
          backgroundImage: "",
          backgroundPosition: "0% 0%",
          backgroundSize: "200%",
          display: "none"
        },
        overlayStyle: {
          display: "none",
          left: "0px",
          top: "0px",
          width: "100px",
          height: "100px"
        }
      };
    },
    methods: {
      zoomImage(e) {
        const image = e.target;
        const { left, top, width, height } = image.getBoundingClientRect();
        const offsetX = e.clientX - left;
        const offsetY = e.clientY - top;
  
        // Calculate percentage coordinates for background positioning
        const x = (offsetX / width) * 100;
        const y = (offsetY / height) * 100;
  
        // Set the background image and position for zoom effect
        this.zoomStyle.backgroundImage = `url(${this.imageSrc})`;
        this.zoomStyle.backgroundPosition = `${x}% ${y}%`;
        this.zoomStyle.display = "block";
  
        // Set the overlay position and size
        this.overlayStyle.display = "block";
        this.overlayStyle.left = `${offsetX - 50}px`; // Centering the overlay
        this.overlayStyle.top = `${offsetY - 50}px`;  // Centering the overlay
      },
      resetZoom() {
        this.zoomStyle.display = "none";
        this.overlayStyle.display = "none";
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 20px;
  }
  
  .image-container {
    flex: 1;
    position: relative;
  }
  
  .main-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .zoomed-image {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%; /* Adjust to be similar to the left image size */
    height: 50%; /* Adjust to be similar to the left image size */
    pointer-events: none;
    background-repeat: no-repeat;
    background-size: 200%;
    border-radius: 8px;
    display: none; /* Hidden by default */
  }
  
  .zoom-overlay {
    position: absolute;
    border: 2px solid rgba(0, 0, 0, 0.5); /* Semi-transparent border */
    background: rgba(255, 255, 255, 0.3); /* Semi-transparent background */
    border-radius: 8px; /* Rounded corners */
    pointer-events: none; /* Prevent interaction */
    display: none; /* Hidden by default */
  }
  .text-container {
    flex: 1;
    padding: 20px;
    position: relative;
  }
  
  h2 {
    margin-top: 0;
  }
  
  p {
    font-size: 1.2em;
    margin: 10px 0;
  }
  
  a {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    color: white;
    background-color: #00704a;
    border-radius: 5px;
    text-decoration: none;
  }
  
  a:hover {
    background-color: #005f3a;
  }
  </style>