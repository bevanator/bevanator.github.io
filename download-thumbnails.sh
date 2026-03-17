#!/usr/bin/env bash
set -euo pipefail

DEST="assets/images"
mkdir -p "$DEST"

UA="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
REFERER="https://rimonakhter.wixsite.com/portfolio"
ACCEPT="image/avif,image/webp,*/*"

pass=0
fail=0
failed=()

download() {
  local filename="$1"
  local url="$2"
  local dest="$DEST/$filename"

  if curl -fsSL \
      -H "User-Agent: $UA" \
      -H "Referer: $REFERER" \
      -H "Accept: $ACCEPT" \
      -o "$dest" \
      "$url"; then
    local size
    size=$(wc -c < "$dest")
    echo "  ✓  $filename  (${size} bytes)"
    pass=$((pass + 1))
  else
    echo "  ✗  $filename  FAILED"
    fail=$((fail + 1))
    failed+=("$filename")
    rm -f "$dest"
  fi
}

echo ""
echo "Downloading thumbnails → $DEST/"
echo "────────────────────────────────────────────────────────────"

download "mars-dozer.webp"          "https://static.wixstatic.com/media/cc6388_452047cf9eae401cb2c14bfbf4b8cde1~mv2.webp/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_452047cf9eae401cb2c14bfbf4b8cde1~mv2.webp"
download "idle-merchant.jpg"        "https://static.wixstatic.com/media/cc6388_42f54a9268604cf191c58bec95527764~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_42f54a9268604cf191c58bec95527764~mv2.jpg"
download "mini-strike.jpg"          "https://static.wixstatic.com/media/cc6388_00dbb7f1771f40e4bbe5ac9832802649~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_00dbb7f1771f40e4bbe5ac9832802649~mv2.jpg"
download "under-the-rooftop.jpg"    "https://static.wixstatic.com/media/cc6388_e0a0803b1d3549209e4a540503e6f591~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_e0a0803b1d3549209e4a540503e6f591~mv2.jpg"
download "rescue-cop.jpg"           "https://static.wixstatic.com/media/cc6388_37d2b257aade46609437484fdbaa48a1~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_37d2b257aade46609437484fdbaa48a1~mv2.jpg"
download "casino-venture.webp"      "https://static.wixstatic.com/media/cc6388_2fdad4266a1d49649995190c8881d25f~mv2.webp/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_2fdad4266a1d49649995190c8881d25f~mv2.webp"
download "ghost-buster-ar.png"      "https://static.wixstatic.com/media/cc6388_4af7e884b9f6404fad364d6bc1f615c5~mv2.png/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_4af7e884b9f6404fad364d6bc1f615c5~mv2.png"
download "zombie-road.png"          "https://static.wixstatic.com/media/cc6388_ac82b31a56994a8aa9284106004c2711~mv2.png/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_ac82b31a56994a8aa9284106004c2711~mv2.png"
download "save-the-base.jpg"        "https://static.wixstatic.com/media/cc6388_613940d8b18b47df8259d71b483af47c~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_613940d8b18b47df8259d71b483af47c~mv2.jpg"
download "money-farming.webp"       "https://static.wixstatic.com/media/cc6388_21d34b1a11664866b815f706c4d700f0~mv2.webp/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_21d34b1a11664866b815f706c4d700f0~mv2.webp"
download "modular-ui.jpg"           "https://static.wixstatic.com/media/cc6388_82276a6de5484c67975d1577edd665e6~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_82276a6de5484c67975d1577edd665e6~mv2.jpg"
download "water-shader.jpg"         "https://static.wixstatic.com/media/cc6388_556c0dbbc940440f8dcd3e0975a292ad~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_556c0dbbc940440f8dcd3e0975a292ad~mv2.jpg"
download "gloss-shader.jpg"         "https://static.wixstatic.com/media/cc6388_ad7473bd10d54bde871b45e1d85dfb14~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_ad7473bd10d54bde871b45e1d85dfb14~mv2.jpg"
download "vfx-graph.png"            "https://static.wixstatic.com/media/cc6388_ffad14fd58c14fa6a454c1260a1f065f~mv2.png/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_ffad14fd58c14fa6a454c1260a1f065f~mv2.png"
download "vr-ui-unreal.jpg"         "https://static.wixstatic.com/media/cc6388_bd2854d0618b4df8aa27606f1d69b9fd~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_bd2854d0618b4df8aa27606f1d69b9fd~mv2.jpg"
download "ar-building.png"          "https://static.wixstatic.com/media/cc6388_64a08a97863e4b1fa0ce95979cbfbf99~mv2.png/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_64a08a97863e4b1fa0ce95979cbfbf99~mv2.png"
download "vr-hand-pose.jpg"         "https://static.wixstatic.com/media/cc6388_c68f70a1ca064b1b9f32066fdfb8c980~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_c68f70a1ca064b1b9f32066fdfb8c980~mv2.jpg"
download "third-person-shooter.jpg" "https://static.wixstatic.com/media/cc6388_c11ab965ded84ffcb34ec98acf011251~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_c11ab965ded84ffcb34ec98acf011251~mv2.jpg"
download "free-flow-combat.jpg"     "https://static.wixstatic.com/media/cc6388_d2444c78b0d644a1b6fe79f13f1bc0e4~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_d2444c78b0d644a1b6fe79f13f1bc0e4~mv2.jpg"
download "vr-painting.png"          "https://static.wixstatic.com/media/cc6388_30e9a15c3cef4ebdab48e97e03cd3234~mv2.png/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_30e9a15c3cef4ebdab48e97e03cd3234~mv2.png"
download "procedural-mesh.jpg"      "https://static.wixstatic.com/media/cc6388_895107e901c748e79be0de45762d30cf~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_895107e901c748e79be0de45762d30cf~mv2.jpg"
download "rpg-gas.png"              "https://static.wixstatic.com/media/cc6388_da3037e9237940b5ae3f6c71b2c52ebd~mv2.png/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_da3037e9237940b5ae3f6c71b2c52ebd~mv2.png"
download "inventory-system.png"     "https://static.wixstatic.com/media/cc6388_75eb49f8c3804279ac5137555e60b99d~mv2.png/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_75eb49f8c3804279ac5137555e60b99d~mv2.png"
download "hack-slash.png"           "https://static.wixstatic.com/media/cc6388_eb62a613ce804dcc8e3cb0591af3980a~mv2.png/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_eb62a613ce804dcc8e3cb0591af3980a~mv2.png"
download "stencil-painting.jpg"     "https://static.wixstatic.com/media/cc6388_18cb1b63423f4fa2a42d27612a83bfe2~mv2.jpg/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_18cb1b63423f4fa2a42d27612a83bfe2~mv2.jpg"
download "locomotion.png"           "https://static.wixstatic.com/media/cc6388_2bc89e29281a431a9a62d5ac98ab2c14~mv2.png/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_2bc89e29281a431a9a62d5ac98ab2c14~mv2.png"
download "melee-combat.png"         "https://static.wixstatic.com/media/cc6388_da38546eb31e496890f43325aaf33773~mv2.png/v1/fill/w_600,h_600,q_90,enc_avif,quality_auto/cc6388_da38546eb31e496890f43325aaf33773~mv2.png"

echo "────────────────────────────────────────────────────────────"
echo "  Done: ${pass} succeeded, ${fail} failed"

if [ ${#failed[@]} -gt 0 ]; then
  echo ""
  echo "  Failed files:"
  for f in "${failed[@]}"; do
    echo "    - $f"
  done
  exit 1
fi
