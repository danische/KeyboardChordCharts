//=============================================================================
//  MuseScore
//  Music Composition & Notation
//
//  Keyboard Chord Charts Plugin
//
//  Copyright (C) 2023 Daniel Marty

//  Based on the work https://musescore.org/en/project/piano-keyboard-diagram
//  and on the Font from Jochen Pietsch https://www.fontspace.com/keyboard-chord-diagram-font-f25876

//  This program is free software; you can redistribute it and/or modify
//  it under the terms of the GNU General Public License version 2
//  as published by the Free Software Foundation and appearing in
//  the file LICENCE.GPL
//=============================================================================

import QtQuick 2.2
import MuseScore 3.0
import "keyboardChordCharts.js" as KeyboardChordCharts
import "chordNames.js" as ChordNames

MuseScore {
   version: "1.0"
   title: "Plugins.Keyboard." + "ChordCharts"
   id: mainWindow

   Component.onCompleted : {
      if (mscoreMajorVersion >= 4) {
         mainWindow.title = "KeyboardChordCharts";
         mainWindow.thumbnailName = "logo.png";
         mainWindow.categoryCode = "diagrams";
      }
   }

   function getNoteList(notes) {
      let noteList = [];

      for (var i = 0; i < notes.length; i++) {
         if (!notes[i].visible)
            continue // skip invisible notes
         noteList.push(notes[i].pitch);
      }
      return noteList;
   }

   function getChordChart(noteList) {
      if (noteList.length > 2) {
         return '<font face="Keyboard Chord Diagram"/><font size="21"/>' + KeyboardChordCharts.getChordChart(noteList);
      }
   }

   function getChordName(noteList,key) {
      if (noteList.length > 2) {
         return ChordNames.getChordName(noteList,key);
      }
   }

   onRun: {
      curScore.startCmd()
      var cursor = curScore.newCursor();
      var startStaff;
      var endStaff;
      var endTick;
      var fullScore = false;
      cursor.rewind(1);
      if (!cursor.segment) { // no selection
         fullScore = true;
         startStaff = 0; // start with 1st staff
         endStaff = curScore.nstaves - 1; // and end with last
      } else {
         startStaff = cursor.staffIdx;
         cursor.rewind(2);
         if (cursor.tick === 0) {
            // this happens when the selection includes
            // the last measure of the score.
            // rewind(2) goes behind the last segment (where
            // there's none) and sets tick=0
            endTick = curScore.lastSegment.tick + 1;
         } else {
            endTick = cursor.tick;
         }
         endStaff = cursor.staffIdx;
      }
      console.log(startStaff + " - " + endStaff + " - " + endTick)

      for (var staff = startStaff; staff <= endStaff; staff++) {
         for (var voice = 0; voice < 4; voice++) {
            cursor.rewind(1); // beginning of selection
            cursor.voice = voice;
            cursor.staffIdx = staff;

            if (fullScore)  // no selection
               cursor.rewind(0); // beginning of score
            while (cursor.segment && (fullScore || cursor.tick < endTick)) {
               if (cursor.element && cursor.element.type === Element.CHORD) {
                  // First...we need to scan grace notes for existence and break them
                  // into their appropriate lists with the correct ordering of notes.
                  var leadingLifo = Array();   // List for leading grace notes
                  var trailingFifo = Array();  // List for trailing grace notes
                  var graceChords = cursor.element.graceNotes;
                  // Build separate lists of leading and trailing grace note chords.
                  if (graceChords.length > 0) {
                     for (var chordNum = 0; chordNum < graceChords.length; chordNum++) {
                        var noteType = graceChords[chordNum].notes[0].noteType
                        if (noteType === NoteType.GRACE8_AFTER || noteType === NoteType.GRACE16_AFTER ||
                           noteType === NoteType.GRACE32_AFTER) {
                           trailingFifo.unshift(graceChords[chordNum])
                        } else {
                           leadingLifo.push(graceChords[chordNum])
                        }
                     }
                  }

                  let noteList = getNoteList(cursor.element.notes);

                  let chordNameText = newElement(Element.STAFF_TEXT);
                  chordNameText.text = getChordName(noteList,cursor.keySignature);
                  cursor.add(chordNameText);

                  const chordChart = getChordChart(noteList);
                  let text = newElement(Element.STAFF_TEXT);
                  text.fontSize *= 1.75
                  text.text = chordChart
                  cursor.add(text);

                  switch (cursor.voice) {
                     case 1: case 3: text.placement = Placement.BELOW; break;
                  }
               } // end if CHORD
               cursor.next();
            } // end while segment
         } // end for voice
      } // end for staff
      curScore.endCmd()
      return;
   } // end onRun
}
