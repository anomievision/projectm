Playlist filter functions.  [More...](#detailed-description)

## Functions

|                | Name           |
| -------------- | -------------- |
| PROJECTM_PLAYLIST_EXPORT void | **[projectm_playlist_set_filter](/projectm/filter.md#function-projectm-playlist-set-filter)**([projectm_playlist_handle](/projectm/types.md#typedef-projectm-playlist-handle) instance, const char ** filter_list, size_t count)<br>Sets a new filter list.  |
| PROJECTM_PLAYLIST_EXPORT char ** | **[projectm_playlist_get_filter](/projectm/filter.md#function-projectm-playlist-get-filter)**([projectm_playlist_handle](/projectm/types.md#typedef-projectm-playlist-handle) instance, size_t * count)<br>Returns the current filter list.  |
| PROJECTM_PLAYLIST_EXPORT size_t | **[projectm_playlist_apply_filter](/projectm/filter.md#function-projectm-playlist-apply-filter)**([projectm_playlist_handle](/projectm/types.md#typedef-projectm-playlist-handle) instance)<br>Applies the current filter list to the existing playlist.  |

## Detailed Description

Playlist filter functions. 

**Copyright**: 2003-2023 projectM Team


projectM &ndash; Milkdrop-esque visualisation SDK Copyright (C)2003-2023 projectM Team

This library is free software; you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation; either version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License along with this library; if not, write to the Free Software Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA See 'LICENSE.txt' included within this release 


## Functions Documentation

### function projectm_playlist_set_filter

```cpp
PROJECTM_PLAYLIST_EXPORT void projectm_playlist_set_filter(
    projectm_playlist_handle instance,
    const char ** filter_list,
    size_t count
)
```

Sets a new filter list. 

**Parameters**: 

  * **instance** The playlist manager instance. 
  * **filter_list** An array with filter strings. 
  * **count** The size of the filter array. 


Does not immediately apply the new list to an existing playlist, only newly added files will be affected. If you need to filter the existing playlist after calling this method, additionally call [projectm_playlist_apply_filter()](/projectm/filter.md#function-projectm-playlist-apply-filter) afterwards.

The filter list consists of simple globbing expressions similar to the .gitignore syntax:



* **?**: Matches any single character except /. 
* *****: Matches 0 or more characters except /. 
* **/**: When used at the begin of a glob, matches if pathname has no path separator. 
* ****/**: Matches 0 or more directories. 
* **/****: When at the end of the glob, matches everything after the /. 

In globbing expressions, \ can be used as path separator instead of /. The backslash can't be used to escape globbing patterns, so matching literal * and ? in filenames is not possible. This is not a huge issue as Windows doesn't allow those characters in filenames and Milkdrop files originate from the Windows world. Character classes like "[0-9]" are also not supported to keep the syntax simple.

Each line can be prefixed with either + or - to either include files matching the pattern or excluding them. Any other character is not interpreted as a prefix and the filter line is matching as an exclude filter. To match a literal + or - at the beginning, add the appropriate prefix in front. Empty filters never match anything, even if the filename is empty.

The filter list is checked in order. The first pattern that matches the filename determines the filter result (include or exclude). If no pattern matches, the file is included. In the case that a default exclude action is required, add a "-/&zwj;**" filter at the end of the list.


### function projectm_playlist_get_filter

```cpp
PROJECTM_PLAYLIST_EXPORT char ** projectm_playlist_get_filter(
    projectm_playlist_handle instance,
    size_t * count
)
```

Returns the current filter list. 

**Parameters**: 

  * **instance** The playlist manager instance. 
  * **count** The size of the filter array. 


**Return**: An array with filter strings. 

Always call [projectm_playlist_free_string_array()](/projectm/memory.md#function-projectm-playlist-free-string-array) on the returned pointer if the data is no longer needed.


### function projectm_playlist_apply_filter

```cpp
PROJECTM_PLAYLIST_EXPORT size_t projectm_playlist_apply_filter(
    projectm_playlist_handle instance
)
```

Applies the current filter list to the existing playlist. 

**Parameters**: 

  * **instance** The playlist manager instance. 


**Return**: The number of removed items. 

Note this function only removes items. Previously filtered items are not added again. If items were removed, the playback history is cleared.




## Source code

```cpp

#pragma once

#include "projectM-4/playlist_types.h"

#ifdef -cplusplus
extern "C" {
#endif

PROJECTM_PLAYLIST_EXPORT void projectm_playlist_set_filter(projectm_playlist_handle instance, const char** filter_list,
                                                           size_t count);

PROJECTM_PLAYLIST_EXPORT char** projectm_playlist_get_filter(projectm_playlist_handle instance, size_t* count);

PROJECTM_PLAYLIST_EXPORT size_t projectm_playlist_apply_filter(projectm_playlist_handle instance);

#ifdef -cplusplus
} // extern "C"
#endif
```


-------------------------------

Updated on 2023-09-26 at 05:12:10 +0000