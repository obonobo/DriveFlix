# DriveFlix

A side project. This idea is similar to something like Plex, but with better
support for cloud storage accounts (such as OneDrive or Google Drive) and
torrenting.

Turns your OneDrive or Google Drive account into a personal streaming server.
Integrated torrent client to download videos on the fly directly to your account.
Basically, the app does all the dirty work of organizing a personal torrented
library of videos. It provides functionality that you would get with a fully
fledged streaming service like Netflix or Hulu. For example, you get 'resume
watching', cover art, and a nice organized interface that works on mobile or
desktop clients.

You could implement a lot of this functionality by glue-ing together existing
applications:

- rclone for accessing a cloud account.
- torrent client such as qbittorrent pointing to your rclone synced directory.
- Plex for accessing the media
- A set of scripts for managing your media (prettifying file names, arranging
the media)

But this is not a seamless experience and you are likely to run into some
difficulties because these applications are not made to work with on another --
you must connect them together yourself, write scripts to manage the media, not
to mention administering the servers and kubernetes cluster.

DriveFlix integrates the components such that the process could be done by
anybody. All the user does is login to DriveFlix, which can use any old cloud
storage login, and you are presented with a dashboard to manage your own
personal media server including a torrent search and automatic
renaming/categorizing of media. On the same app you have a nice media player,
with continue watching, etc. features.

The torrent search is abstracted so that you can find media by name in plain
english rather than wading through the junk on the pirate bay. Similarly, your
media library is automatically renamed, organized, categorized, etc. which is a
manual step most of the time.

Nothing is implemented yet, I am learning about software architecture, in
particular microservices, and I will be developing the DriveFlix project as part
of the learning process.

After some research on the topic, I will do some smaller projects (like
HumbleBundleScraper) and then I'll dive into this mother.

