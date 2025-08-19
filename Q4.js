// 4. Promise Detect which Api Failed

async function checkApi() {
  try {
    await fetch("url1");
    console.log("Api sucess");
  } catch {
    console.log("Api Failed");
  }
  try {
    await fetch("url2");
    console.log("Api sucess");
  } catch {
    console.log("Api Failed");
  }
  try {
    await fetch("url3");
    console.log("Api sucess");
  } catch {
    console.log("Api Failed");
  }
}

checkApi()
