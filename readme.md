import gspread
from oauth2client.service_account import ServiceAccountCredentials
import requests
from pdf2image import convert_from_path

json_path = "/content/drive/My Drive/Colab_Files/laybaocaodanganh-819587ce6209.json"

# 🔹 Cấu hình quyền truy cập Google Sheets API
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
creds = ServiceAccountCredentials.from_json_keyfile_name(json_path, scope)
client = gspread.authorize(creds)

# 🔹 ID Google Sheets & Trang tính cần chụp
SHEET_ID = "1TUYwBK9t08jnVsE0sJNG71tjka2FP7HaB-DyntxVzzA"
SHEET_GID = "326521698"

# 🔹 Mở trang tính & làm mới dữ liệu
sheet = client.open_by_key("1TUYwBK9t08jnVsE0sJNG71tjka2FP7HaB-DyntxVzzA").worksheet("BCDT-CP Tháng")
data = sheet.get_all_values()

# 🔹 Lấy link PDF
PDF_URL = f"https://docs.google.com/spreadsheets/d/1TUYwBK9t08jnVsE0sJNG71tjka2FP7HaB-DyntxVzzA/export?format=pdf&gid=326521698&portrait=true&scale=4&gridlines=true&printnotes=false"

# 🔹 Gửi yêu cầu tải PDF
headers = {"User-Agent": "Mozilla/5.0"}
response = requests.get(PDF_URL, headers=headers)
pdf_path = "/content/sheet_data.pdf"

# 🔹 Kiểm tra lỗi & lưu file PDF
if response.status_code == 200:
    with open("sheet_data.pdf", "wb") as f:
        f.write(response.content)
    print("✅ PDF đã được tải thành công!")
else:
    print(f"❌ Lỗi: {response.status_code}")



# 🔹 Chuyển đổi PDF sang ảnh
images = convert_from_path(pdf_path)
image_paths = []
for i, image in enumerate(images):
    image_path = f"/content/page_{i+1}.png"
    image.save(image_path, "PNG")
    image_paths.append(image_path)

print("✅ Đã chuyển đổi PDF sang ảnh:", image_paths)

# 🔹 Gửi ảnh lên Lark
WEBHOOK_URL = "https://open.larksuite.com/open-apis/bot/v2/hook/1381dc55-73b7-4cb2-83c5-1b6a1467bdfc"  # Thay bằng webhook thật

APP_ACCESS_TOKEN = "IXtHMsq0forSJcOF87TMKfbMHD6MyPaN"  # Thay bằng token thật

headers = {
    "Authorization": f"Bearer {APP_ACCESS_TOKEN}"
}

image_keys = []

for image_path in image_paths:
    with open(image_path, "rb") as img:
        files = {"file": img}
        response = requests.post(WEBHOOK_URL, headers=headers, files=files)

    if response.status_code == 200:
        image_key = response.json()["data"]["file_key"]
        image_keys.append(image_key)
        print(f"✅ Đã upload ảnh: {image_path}")
    else:
        print(f"❌ Lỗi khi upload ảnh {image_path}: {response.text}")

# 🔹 Gửi tin nhắn chứa ảnh lên Lark (Bước 2: Gửi ảnh đã upload)
SEND_MESSAGE_URL = "https://open.larksuite.com/open-apis/im/v1/messages"

payload = {
    "receive_id_type": "chat_id",
    "receive_id": "YOUR_CHAT_ID",  # Thay bằng chat_id thật
    "msg_type": "image",
    "content": {
        "image_key": image_keys[0]  # Gửi ảnh đầu tiên (có thể lặp để gửi tất cả)
    }
}

response = requests.post(SEND_MESSAGE_URL, headers=headers, json=payload)

if response.status_code == 200:
    print("✅ Đã gửi ảnh lên Lark thành công!")
else:
    print(f"❌ Lỗi khi gửi ảnh lên Lark: {response.text}")