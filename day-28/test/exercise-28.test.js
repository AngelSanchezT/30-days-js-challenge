import { Playlist } from "../exercise-28";
import { expect } from 'chai';

describe("Playlist", () => {
  let playlist;

  beforeEach(() => {
    playlist = new Playlist();
  });

  it("adds a song to an empty playlist", () => {
    playlist.addSong("Bohemian Rhapsody");

    expect(playlist.top.value).to.eql("Bohemian Rhapsody");
    expect(playlist.bottom.value).to.eql("Bohemian Rhapsody");
    expect(playlist.length).to.eql(1);
  });

  it("adds a song to a non-empty playlist", () => {
    playlist.addSong("Bohemian Rhapsody");
    playlist.addSong("Stairway to Heaven");

    expect(playlist.top.value).to.eql("Stairway to Heaven");
    expect(playlist.bottom.value).to.eql("Bohemian Rhapsody");
    expect(playlist.length).to.eql(2);
  });

  it("throws an error if the playlist is empty", () => {
    expect(() => {
      playlist.playSong();
    }).to.throw();
  });

  it("should plays and removes the top song from the playlist", () => {
    playlist.addSong("Bohemian Rhapsody");
    playlist.addSong("Stairway to Heaven");

    const song1 = playlist.playSong();
    expect(song1).to.eql("Stairway to Heaven");
    expect(playlist.top.value).to.eql("Bohemian Rhapsody");
    expect(playlist.bottom.value).to.eql("Bohemian Rhapsody");
    expect(playlist.length).to.eql(1);

    const song2 = playlist.playSong();
    expect(song2).to.eql("Bohemian Rhapsody");
    expect(playlist.top).to.be.null;
    expect(playlist.bottom).to.be.null;
    expect(playlist.length).to.eql(0);
  });

  it("should returns an empty array for an empty playlist", () => {
    const songs = playlist.getPlaylist();

    expect(songs).to.eql([]);
  });

  it("should return an array of songs in reverse order of addition", () => {
    playlist.addSong("Bohemian Rhapsody");
    playlist.addSong("Stairway to Heaven");
    playlist.addSong("Hotel California");

    const songs = playlist.getPlaylist();

    expect(songs).to.eql([
      "Hotel California",
      "Stairway to Heaven",
      "Bohemian Rhapsody",
    ]);
  });

  it("returns an array of songs in reverse order of addition", () => {
    playlist.addSong("Bohemian Rhapsody");
    playlist.addSong("Stairway to Heaven");
    playlist.addSong("Hotel California");

    const songs = playlist.getPlaylist();

    expect(songs).to.eql([
      "Hotel California",
      "Stairway to Heaven",
      "Bohemian Rhapsody",
    ]);
  });
});