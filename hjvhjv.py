import pyautogui
import time
x=0
while True:
    print(pyautogui.screenshot().getpixel((200, 200)))

    if pyautogui.screenshot().getpixel((200, 200)) == (75, 219, 106) or pyautogui.screenshot().getpixel((200, 200)) != (206, 38, 54):
        if x<5:
            pyautogui.click(200,200)
            x+=1
    else:
        x=0