exports.getIndex = async (req, res) => {
  const locals = {
    title: "Kitobek | Bosh sahifa",
  }
  res.render('partials/index',locals);
}


exports.getLogin = async (req, res) => {
  const locals = {
    title: "Kitobek | Kirish",
  }
  res.render('partials/login' , locals);

}

