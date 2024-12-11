---
sidebar_position: 1
---

# Vim Shortcuts

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

## **Practice One**

```jsx

```

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

## **Practice Two**

```jsx

```

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

## **Practice Three**

```jsx

```

## Basic navigation

- left / down / up / right

        h / j / k / l

- navigate in any direction more than one space

        NUMBER then LETTER (ea. 13j)

## **Practice Four**

```jsx

```

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

## **Practice Five**

```jsx

```

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

- Toggle between enclosing characters like (), {}, [],

        %

## **Practice Six**

```jsx

```

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

## **Practice Seven**

```jsx

```

## Change or Replace

- delete the word from the cursor position to the end of the word and put you into insert mode

        cw

- Replace a character under the cursor

        r <new char>

- Toggle the case of a character

        ~

- Increase the number under the cursor by 1

        Ctrl + a

- Decrease the number under the cursor by 1

        Ctrl + x

- Increase a Number by a Specific Amount

        10 Ctrl + a

- Decrease a Number by a Specific Amount

        10 Ctrl + x

## **Practice Eight**

```jsx

```

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

- Yank Inside a Pair of characters (not including the pair of characters)

        yi( / yi{ / yi[ / yi< / yi' / yi" / yi`

- Yank around a Pair of characters (including the pair of characters)

        ya( / ya{ / ya[ / ya< / ya' / ya" / ya`

- Yank a Tag Block (including the parent tag)

        yat

- Yank Inside a Tag Block (tag content only)

        yit

## **Practice Nine**

```jsx

```

## undo and redo

- Undo the last change

        u (can be pressed repeatedly to undo multiple changes.)

- Redo Last Undone Change

        Ctrl + r (can be pressed repeatedly to redo multiple changes.)

- Redo last command

        . (can be pressed repeatedly to redo multiple changes.)

## **Practice Ten**

```jsx

```

## Deleting

- Delete the character or space under the cursor

        x

- Delete the character or space before the cursor

        X

- Delete from the cursor to the end of the word (excluding the space after it).

        dw

- Delete the entire word including the space after it.

        daw

- Delete the inner word (excluding the space around it).

        diw

- Delete the entire current line.

        dd

- Delete n lines starting from the current line

        ndd (For example, 3dd )

- Delete from the cursor to the end of the line.

        <shift> d

- Delete from the cursor to the beginning of the line (excluding the character under the cursor).

        d0

## **Practice Eleven**

```jsx

```

## Searching

- Search forward for pattern (term)

        /pattern THEN <enter>

- Clear the search highlight.

        :noh

- Search backward for pattern (term)

        ?pattern THEN <enter>

- Repeat the last search in the same direction (forward or backward).

        n

- Repeat the last search in the opposite direction.

        N

- Search forward for the next instance of the word under the cursor.

        *

- Search backward for the previous instance of the word under the cursor.

        #

- Toggle between the last visited places

        ``

- Toggle between the last edited places

        `.

## **Practice Twelve**

```jsx

```

## Visual mode

- Character-wise Visual Mode

        v (This mode allows you to select text character by character.)
          Move the cursor to select the desired range of characters.

- Line-wise Visual Mode

        V (This mode allows you to select entire lines.)
          Use movement keys to extend the selection to additional lines.

- Block-wise Visual Mode

        Ctrl + v (This mode allows you to select a rectangular block of text, useful for columnar operations.)
                 Use movement keys to extend the selection to form a rectangle.

## **Practice Thirteen**

```jsx

```

## Common Operations in Visual Modes

Deletes the selected text.

        d

Copies the selected text.

        y

Changes the selected text by deleting it and entering insert mode.

        c

Indents the selected text to the right.

        >

Un-indents the selected text to the left.

        <

## **Practice Fourteen**

```jsx

```

## Folding code blocks

- Close the fold under the cursor.

        zc

- Open the fold under the cursor.

        zo

- Close all folds in file

        zM

- Open all folds in file

        zR

## **Practice Fifteen**

```jsx

```
