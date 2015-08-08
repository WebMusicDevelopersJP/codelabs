# Codelabs for Web Audio & Web MIDI

## Live Demo
 - [Web Audio API](http://webmusicdevelopers.appspot.com/codelabs/webaudio/index.html)
 - [Web MIDI API(with x-webmidi)](http://webmusicdevelopers.appspot.com/codelabs/x-webmidi/index.html)

## What is this?
This is codelabs materials for Web Audio and Web MIDI.   
And this repository is repository to translate one language to another.
So we are happy to be requested "Pull Request" of translated materials in languages you are familiar with.

## How to contribute translation
1. Copy translation file which name is "steps.[language].html"  
(e.g: Because [Web Audio Codelab](https://github.com/WebMusicDevelopersJP/codelabs/tree/gh-pages/webaudio) has codelab in Japanese and English, so [_step.ja-jp.html_](https://github.com/WebMusicDevelopersJP/codelabs/blob/gh-pages/webaudio/step.ja-jp.html)(Japanese) and [_step.en-us.html_](https://github.com/WebMusicDevelopersJP/codelabs/blob/gh-pages/webaudio/step.en-us.html)(English) are existing.)
2. Change language in extension of the file name.  
(e.g: **Translate to Spanish** _step.en-us.html_ to _step.es-es.html_ )  
!!See the section *[Supported languages be default](#suportedlang)* for language that are supported by default 
3. Translate the file created in step 2
4. Make pull request!!

## Explanation of each tags in step.[language].html
There are some custom tags and some limitations. However, all of the HTML tags are permitted to use basically.
### &lt;codelab-pack&gt;
Inside this tag is the whole steps in the codelab. &lt;codelab-article&gt; is the article in each step.
#### attributes
 - **_label_** : This will be the title of the codelab and this will be displaied in Title.
 - **_feedback_link_** : The Link for reporting bugs. This will inserted in the bottom of each step.
 - **_category_** : (Not used as is Aug. 2015)
 - **_environment_** : (Not used as is Aug. 2015)
 
### &lt;codelab-pack&gt;
The article in each step.
#### attributes
 - **_step_label_** : This will be the title of the step and this will be displaied as step name.
 - **_duration_** : Estimation time to complete that step. Specify time format in _mm:ss_ .
 
### &lt;codelab-snippet&gt;
Letters in this tag will be displayed as source code. This tag is extended from &lt;pre&gt; tag, so it will be displayed as you write.  

**[IMPORTANT]** Use "''& lt;" for "&lt;" and "''& gt;" for "&gt;".

## <a name="suportedlang"> Supported(configuration free) languages be default
Make PullRequest if the language that you want to translate is not listed below.
 - ja-jp : Japanese
 - en-us : English(US)
 - es-es : Spanish(Spain)
 - de-de : German(Germany)
 - ah-cn : Chinese(PRC)
 - zh-tw : Chinese(Taiwan)


## License
Apache License, Version 2.0


## Author
Ryoya Kawai 2015
 
