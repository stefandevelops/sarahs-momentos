import sys
from playwright.sync_api import sync_playwright
B="http://localhost:3100"
shots=[("home-desktop-1440",B+"/",1440,900,True),("home-mobile-390",B+"/",390,844,True),
("shop-desktop",B+"/shop",1440,900,True),("product-desktop",B+"/products/ivory-couture",1440,900,True),
("product-mobile-390",B+"/products/ivory-couture",390,844,True),("weddings-desktop",B+"/weddings-events",1440,900,True),
("shop-mobile-390",B+"/shop",390,844,True)]
with sync_playwright() as p:
  b=p.chromium.launch()
  for name,url,w,h,full in shots:
    pg=b.new_page(viewport={"width":w,"height":h}, device_scale_factor=1, locale="en-GB")
    pg.goto(url, wait_until="networkidle")
    pg.evaluate("""async()=>{for(let y=0;y<document.body.scrollHeight;y+=300){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,150));}await Promise.all([...document.images].map(i=>{i.loading="eager";return i.complete?0:new Promise(r=>{i.onload=i.onerror=r;})}));window.scrollTo(0,0);}""")
    pg.wait_for_load_state("networkidle"); pg.wait_for_timeout(800)
    pg.screenshot(path=f"screenshots/{name}.png", full_page=full)
    pg.close()
  # basket drawer
  pg=b.new_page(viewport={"width":1440,"height":900}, locale="en-GB")
  pg.goto(B+"/products/blush-rose-cylinder", wait_until="networkidle")
  pg.click("text=Deluxe"); pg.fill("input[type=date]","2026-10-30"); pg.fill("textarea","Happy birthday, with love")
  pg.click("button:has-text('Add to basket')"); pg.wait_for_timeout(800)
  pg.screenshot(path="screenshots/basket-drawer-desktop.png")
  b.close()
print("ok")
