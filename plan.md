# Plan to Add Video Support to Gallery

This plan outlines the steps to modify the project gallery to support both images and videos, allowing videos to have controls and loop.

**Objective:** Extend the gallery functionality in `pages/projects.tsx` to display both images and videos, with videos configured to show controls and loop playback.

**Current State:** The gallery currently uses an array of strings (`string[]`) for the `gallery` property in the project data, assuming all items are image URLs. The rendering logic in `pages/projects.tsx` uses `<img>` tags for all gallery items.

**Proposed Data Structure:**

Introduce a new interface `GalleryItem` to represent items in the gallery:

```typescript
interface GalleryItem {
  type: 'image' | 'video';
  url: string;
}
```

The `gallery` property in the `Project` and `SubItem` interfaces will be updated to `GalleryItem[]`.

**Detailed Steps:**

1.  **Update the `Project` and `SubItem` interfaces (`src/types/project.d.ts`):**
    *   Define the `GalleryItem` interface.
    *   Change the type of the `gallery` property in both `Project` and `SubItem` interfaces from `string[]` to `GalleryItem[]`.

2.  **Update Project Data Files (`src/data/projects/*.ts`):**
    *   Read each of the individual project data files (e.g., `branding.ts`, `fotografia-video.ts`, `modelado-renderizado-3d.ts`, etc.).
    *   For each project and sub-item that has a `gallery`, update the array to contain objects with `type` and `url` properties, following the `GalleryItem` interface.
    *   Example:
        ```typescript
        // Before
        gallery: [
          '/images/projects/branding/gallery/image1.png',
          '/images/projects/branding/gallery/image2.png',
        ],

        // After
        gallery: [
          { type: 'image', url: '/images/projects/branding/gallery/image1.png' },
          { type: 'image', url: '/images/projects/branding/gallery/image2.png' },
          { type: 'video', url: '/videos/projects/branding/gallery/video1.mp4' }, // Example video entry
        ],
        ```

3.  **Modify Gallery Rendering in `pages/projects.tsx`:**
    *   Locate the gallery rendering loop within the `SubItems` section.
    *   Inside the map function for `sub.gallery`, add conditional rendering based on `galleryItem.type`.
    *   If `galleryItem.type === 'image'`, render the existing `<img>` tag.
    *   If `galleryItem.type === 'video'`, render a `<video>` tag with `src={galleryItem.url}`, `controls`, and `loop` attributes.

4.  **Update Modal Logic in `pages/projects.tsx`:**
    *   Modify the `openModal` function to handle both image and video URLs. It might be beneficial to pass the entire `GalleryItem` object or at least the type along with the URL.
    *   In the modal's rendering logic, check the type of the media being displayed.
    *   If it's an image, render an `<img>` tag.
    *   If it's a video, render a `<video>` tag with `src`, `controls`, and `loop` attributes.

**Implementation Mode:**

Once this plan is approved, I will request to switch to "💻 Code" mode to implement these changes.