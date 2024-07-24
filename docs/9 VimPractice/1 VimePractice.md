---
sidebar_position: 1
---

# Vim Practice

## From the editor

- Toggle Zen Mode

        ctrl + z

- Toggle Sidebar/focus (explorer)

        ctrl + e

- Toggle Terminal/focus

        ctrl + t

- Toggle Opened Files

        shift + l (Right)

        shift + h (left)

- Quick open Files

        Leader + f

- Split Window

        Leader + s (horizontally)

        Leader + v (Vertically)

- Switch Focus Window group

        Leader + h / j / k / l

- Close and Save File

        CMD + w

- Show Hover

        shift + k

- Toggle Vim

        ALT + v

- Move current line Down

        ALT + j

- Move current line Up

        ALT + k

## From the terminal

- Toggle Terminal/focus

        ctrl + t

- Open new Terminal

        CMD + n

- Switch focus/next terminal

        CMD + j

- Switch focus/previous terminal

        CMD + k

- Close Terminal

        CMD + w

## From the file tree

- Toggle Sidebar/focus (explorer)

        ctrl + e

- Navigate up and down the tree

        k / j

- Expand / Un-expand folders

        l / Space

- Open file/focus

        l / Space

- New folder

        Shift + n

- New file

        n

- Re-name file / folder

        r

- Delete file / folder

        d

## Basic navigation

- left / down / up / right

        h / j / k / l

- navigate in any direction more than one space

        NUMBER then LETTER (ea. 13j)

## In-line navigation

- Jump forwards to the start of a word

        w

- Jump backwards to the start of a word

        b

- Jump forwards to the end of a word

        e

- By prefixing a movement command with a number, you can repeat that movement multiple times

        3w / 2e / 4b

- Jump to the end of the line

        $ (use shift + a, instead)

- Jump to the start of the line

        0 (zero)

- Move the cursor to the fist character of the current line

        ^

- Find/Move to the next occurrence of a character to the right

        f then <char>

- Find/Move to the next occurrence of a character to the left

        F then <char>

## Vertical Navigation

- Move to the beginning of the next paragraph

        }

- Move to the beginning of the previous paragraph

        {

- Move to the beginning of the next sentence

        )

- Move to the beginning of the previous sentence

        (

- Move down half a screen

        Ctrl + d

- Move up half a screen

        Ctrl + u

- Move forward one full screen

        Ctrl + f

- Move backward one full screen

        Ctrl + b

- Go to the end of the file

        G

- Go to the beginning of the file

        gg

## Entering Insert mode

- Insert before the cursor.

        i

- Insert at the beginning of the line.

        I

- Insert after the cursor.

        a

- Insert at the end of the line.

        A

- Open a new line below the current line and enter insert mode.

        o

- Open a new line above the current line and enter insert mode.

        O

## Change or Replace

- delete the word from the cursor position to the end of the word and put you into insert mode

        cw

- Replace a character under the cursor

        r <new char>

## Copy and paste

- Yank a word from the cursor

        yw

- Paste on normal mode

        p

- Yank the word without any surrounding whitespace

        yiw

- Yank the word with any surrounding whitespace

        yaw

- Yank the line

        yy
