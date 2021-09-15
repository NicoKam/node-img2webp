/**
 *
 *   img2webp [file-level options] [image files...] [per-frame options...]
 *
 * File-level options (only used at the start of compression):
 * -min_size ............ minimize size
 * -loop <int> .......... loop count (default: 0, = infinite loop)
 * -kmax <int> .......... maximum number of frame between key-frames
 * (0=only keyframes)
 * -kmin <int> .......... minimum number of frame between key-frames
 * (0=disable key-frames altogether)
 * -mixed ............... use mixed lossy/lossless automatic mode
 * -v ................... verbose mode
 * -h ................... this help
 * -version ............. print version number and exit

 * Per-frame options (only used for subsequent images input):
 * -d <int> ............. frame duration in ms (default: 100)
 * -lossless  ........... use lossless mode (default)
 * -lossy ... ........... use lossy mode
 * -q <float> ........... quality
 * -m <int> ............. method to use
 */
module.exports = {
  args: ['-loop', '0', '-lossy', '-d', '40'],
};
