import { ToastExamples } from '@/components/examples'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/registry/dylo/ui/alert-dialog'
import { Button } from '@/registry/dylo/ui/button'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/registry/dylo/ui/context-menu'
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/registry/dylo/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/registry/dylo/ui/dropdown-menu'
import { Field, Label } from '@/registry/dylo/ui/field'
import { IconButton } from '@/registry/dylo/ui/icon-button'
import { Input } from '@/registry/dylo/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/registry/dylo/ui/popover'
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/registry/dylo/ui/sheet'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/registry/dylo/ui/tooltip'
import { Copy, Ellipsis, Info, Pencil, Trash2 } from 'lucide-react'
import type { ComponentDoc } from './types'

const portalNote =
  'Overlays open in a portal on the page, so they follow the site theme (the switch in the sidebar), not the pane.'

export const overlays: ComponentDoc[] = [
  {
    slug: 'dialog',
    usage: `import { Dialog, DialogBody, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

<Dialog>
  <DialogTrigger asChild><Button variant="primary">Add API key</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader><DialogTitle>Add API key</DialogTitle></DialogHeader>
    <DialogBody>...</DialogBody>
    <DialogFooter>...</DialogFooter>
  </DialogContent>
</Dialog>`,
    examples: [
      {
        title: 'Form dialog',
        render: (theme) => (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="primary">Add API key</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add API key</DialogTitle>
                <DialogDescription>The key is shown once. Store it somewhere safe.</DialogDescription>
              </DialogHeader>
              <DialogBody>
                <Field>
                  <Label htmlFor={`${theme}-key-name`}>Name</Label>
                  <Input id={`${theme}-key-name`} placeholder="Production" />
                </Field>
              </DialogBody>
              <DialogFooter>
                <DialogClose asChild>
                  <Button>Cancel</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button variant="primary">Add</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ),
      },
    ],
    props: [
      {
        name: 'showClose',
        type: 'boolean',
        default: 'true',
        description: 'On DialogContent. The close button in the corner.',
      },
    ],
    notes: [portalNote, 'The dialog scales up from 96% and fades in over 200ms; it is instant under reduced motion.'],
  },
  {
    slug: 'alert-dialog',
    usage: `import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, ... } from '@/components/ui/alert-dialog'

<AlertDialogAction destructive>Delete</AlertDialogAction>`,
    examples: [
      {
        title: 'Destructive confirmation',
        render: (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">
                <Trash2 /> Delete API key
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete API key</AlertDialogTitle>
                <AlertDialogDescription>
                  Requests that use this key will fail straight away. This cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction destructive>Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ),
      },
    ],
    props: [
      {
        name: 'destructive',
        type: 'boolean',
        default: 'false',
        description: 'On AlertDialogAction. The error-tone button.',
      },
    ],
    notes: [portalNote],
  },
  {
    slug: 'sheet',
    usage: `import { Sheet, SheetBody, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

<SheetContent side="right">...</SheetContent>`,
    examples: [
      {
        title: 'Sides',
        description: 'Right for a log or event, left for the mobile sidebar, bottom for a mobile menu.',
        render: (
          <>
            {(['right', 'left', 'bottom'] as const).map((side) => (
              <Sheet key={side}>
                <SheetTrigger asChild>
                  <Button className="capitalize">{side}</Button>
                </SheetTrigger>
                <SheetContent side={side}>
                  <SheetHeader>
                    <SheetTitle>POST /emails</SheetTitle>
                    <SheetDescription>200 OK, 142ms</SheetDescription>
                  </SheetHeader>
                  <SheetBody>
                    <p className="text-sm text-default">The request and response bodies go here.</p>
                  </SheetBody>
                </SheetContent>
              </Sheet>
            ))}
          </>
        ),
      },
    ],
    props: [
      {
        name: 'side',
        type: "'right' | 'left' | 'bottom'",
        default: "'right'",
        description: 'On SheetContent. The edge it slides from.',
      },
    ],
    notes: [portalNote],
  },
  {
    slug: 'popover',
    usage: `import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

<Popover>
  <PopoverTrigger asChild><Button>Details</Button></PopoverTrigger>
  <PopoverContent>...</PopoverContent>
</Popover>`,
    examples: [
      {
        title: 'Details',
        render: (
          <Popover>
            <PopoverTrigger asChild>
              <Button>
                <Info /> Rate limit
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-72 p-4">
              <p className="text-sm font-medium text-emphasis">2 requests a second</p>
              <p className="mt-1 text-[0.8125rem] leading-5 text-default">
                Per team. Requests over the limit get a 429 and can be retried after a second.
              </p>
            </PopoverContent>
          </Popover>
        ),
      },
    ],
    notes: [portalNote],
  },
  {
    slug: 'dropdown-menu',
    usage: `import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

<DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>`,
    examples: [
      {
        title: 'Row actions',
        render: (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <IconButton aria-label="More actions">
                  <Ellipsis />
                </IconButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <Pencil /> Edit
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Copy /> Copy ID <DropdownMenuShortcut>C</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <Trash2 /> Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>Columns</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuLabel>Show</DropdownMenuLabel>
                <DropdownMenuCheckboxItem checked>To</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>Status</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Subject</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ),
      },
    ],
    props: [{ name: 'variant', type: "'destructive'", description: 'On DropdownMenuItem. The error-tone item.' }],
    notes: [portalNote],
  },
  {
    slug: 'context-menu',
    usage: `import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from '@/components/ui/context-menu'`,
    examples: [
      {
        title: 'Right-click',
        render: (
          <ContextMenu>
            <ContextMenuTrigger className="flex h-28 w-full items-center justify-center rounded-xl border border-dashed border-gray-a5 text-sm text-default">
              Right-click here
            </ContextMenuTrigger>
            <ContextMenuContent className="w-48">
              <ContextMenuLabel>Template</ContextMenuLabel>
              <ContextMenuItem>Duplicate</ContextMenuItem>
              <ContextMenuItem>Rename</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        ),
      },
    ],
    notes: [portalNote],
  },
  {
    slug: 'tooltip',
    usage: `import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

<Tooltip>
  <TooltipTrigger asChild><IconButton aria-label="Copy"><Copy /></IconButton></TooltipTrigger>
  <TooltipContent>Copy</TooltipContent>
</Tooltip>`,
    examples: [
      {
        title: 'On an icon button',
        render: (
          <Tooltip>
            <TooltipTrigger asChild>
              <IconButton variant="secondary" aria-label="Copy ID">
                <Copy />
              </IconButton>
            </TooltipTrigger>
            <TooltipContent>Copy ID</TooltipContent>
          </Tooltip>
        ),
      },
    ],
    notes: ['Wrap the app once in `TooltipProvider`.', portalNote],
  },
  {
    slug: 'toast',
    usage: `import { toast, Toaster } from '@/components/ui/toast'

// once, in the root layout
<Toaster />

toast('Domain verified', { tone: 'success' })`,
    examples: [
      { title: 'Tones', description: 'Press a button. Toasts stack at the bottom right.', render: <ToastExamples /> },
    ],
    props: [
      { name: 'title', type: 'ReactNode', description: 'The first argument to `toast()`.' },
      { name: 'description', type: 'ReactNode', description: 'A second line.' },
      {
        name: 'tone',
        type: "'neutral' | 'success' | 'info' | 'error'",
        default: "'neutral'",
        description: 'The icon and colour.',
      },
      {
        name: 'duration',
        type: 'number',
        default: '4000',
        description: 'On Toaster. Milliseconds before a toast leaves.',
      },
    ],
  },
]
