const Home = () => {
    return (
    // This version will be what is visible if someone views the website but
    // does not have a user logged in. On that note, once this page is set up:
    // TODO: User logged in version
    <div className="page">
      <div id="WelcomeSection">
        {/* <img className="homeTitleBanner" src="https://i.imgur.com/ps8RBYa.png" />  */}
        <div>
          <p>Already have an account?</p>
          <button>LOGIN NOW</button>
        </div>
        <div>
          <p>Need an account?</p>
          <button>JOIN NOW</button>
        </div>
      </div>
      <div id="AnnouncementSection"></div>
    </div>
  );
}
    
export default Home;
    