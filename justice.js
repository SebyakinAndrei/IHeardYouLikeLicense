'use strict'
let last_studio;
function player_template(episode, video_link, link_without_ep_num, data) {
    return `<div class="player-container">
                    <div class="b-video_player" data-episode="${episode}">
                        <div class="player-area"><iframe src="${video_link}" id="player-iframe" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no" allowfullscreen="allowfullscreen" style="height: ${$(window).height()/2}px;"></iframe></div>
                        <div class="cc-anime_video_report-new">
                            <div class="cc-2a">
                                <div class="c-column">
                                    <p class="m5"><b>Жалоба на видео (Не Шикимори!)</b></p>
                                    <div class="m15">
                                        <div class="b-prgrph">Данное видео проигрывается с помощью расширения "I heard you like license" и не связано с сайтом shikimori.org</div>
                                        <div class="b-prgrph">Расширение ничего своего не добавляет к видео плеерам: ни рекламу, ни редиректы на другие сайты.</div>
                                        <div class="b-prgrph">Всё, что происходит при просмотре видео, это действия</div>
                                        <ul class="b-list">
                                            <li> либо самого видео хостинга, с которого проигрывается видео;<br> </li>
                                            <li> либо плагинов, установленных в вашем браузере;<br> </li>
                                            <li> либо вирусов, живущих на вашем компьютере;<br></li>
                                        </ul>
                                        <div class="b-prgrph">Расширение никак не влияет на работу видео плеера и страниц сайта с нелицензированными тайтлами и других страниц!</div>
                                        <div class="b-prgrph">Жалобы и предложения кидать в лс @ThePrincessOf69</div>
                                    </div>
                                    <div class="b-button" id="hide-report"> Скрыть </div>
                                </div>
                            </div>
                        </div>
                    <div class="cc-player_controls cc-2a">
                        <div class="c-column">
                            <div class="cc-navigation">
                                <a class="c-control prev">
                                    <div class="icon"></div>
                                    <div class="label">Предыдущий</div>
                                </a>
                                <div class="c-control episode-num"><span>Эпизод</span><b> #</b><input data-href="${link_without_ep_num}EPISODE_NUMBER" type="text" value="${episode}" disabled="" style="background: white;">
                                    <div class="video-link"><a href="${video_link}" target="_blank">прямая ссылка</a></div>
                                </div>
                                <a class="c-control next">
                                    <div class="icon"></div>
                                    <div class="label">Следующий</div>
                                </a>
                            </div>
                            <div class="cc-optional_controls">
                                <a class="c-control upload" href="${link_without_ep_num.replace('?no_redirect=1','')}new?anime_video%5Banime_id%5D=36649&amp;anime_video%5Bepisode%5D=${episode}&amp;anime_video%5Bkind%5D=fandub&amp;anime_video%5Blanguage%5D=russian&amp;anime_video%5Bquality%5D=tv&amp;anime_video%5Bsource%5D=shikimori.org&amp;anime_video%5Bstate%5D=uploaded">
                                    <div class="icon"></div>
                                    <div class="label">Загрузить</div>
                                </a>
                            </div>
                        </div>
                        <div class="c-column">
                            <div class="cc-options">
                                <div class="c-buttons cc-3a">
                                    <div class="c-column c-control increment-user_rate">
                                        <div class="icon"></div>
                                        <div class="label">Просмотрено</div>
                                        <div id="result" hidden></div>
                                    </div>
                                    <div class="c-column c-control show-options">
                                        <div class="icon"></div>
                                        <div class="label">Опции</div>
                                    </div>
                                    <div class="c-column c-control report">
                                        <div class="icon"></div>
                                        <div class="label">Пожаловаться</div>
                                    </div>
                                </div>
                                <div class="c-video_stats">
                                    <div class="views_count">${data['num_views']} просмотров</div>
                                    <div class="uploader">
                                        <div class="b-user16"><a href="https://ru.wiktionary.org/wiki/%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%B0%D1%81%D1%82" title="Wakanim"><img alt="Wakanim" src="https://i.imgur.com/Y2BY56Q.png" style="width: 18px; height: 18px;"><span>Wakanim</span></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
}

function empty_player_template(episode, link_without_ep_num, data) {
    return `<div class="player-container">
        <div class="b-video_player">
            <div class="player-area">
                <div class="player-placeholder" style="height: ${$(window).height()/2}px;">&nbsp;</div>
            </div>
            <div class="cc-player_controls cc-2a">
                <div class="c-column">
                    <div class="cc-navigation"><a class="c-control prev">
                            <div class="icon"></div>
                            <div class="label">Предыдущий</div>
                        </a>
                        <div class="c-control episode-num"><span>Эпизод</span><b> #</b><input data-href="${link_without_ep_num}EPISODE_NUMBER" type="text" value="${episode}" disabled="" style="background: white;">
                            <div class="video-link no-video">нет видео</div>
                        </div><a class="c-control next">
                            <div class="icon"></div>
                            <div class="label">Следующий</div>
                        </a>
                    </div>
                </div>
                <div class="c-column">
                    <div class="cc-options">
                        <div class="c-column cc-2a"><a class="c-control upload" href="${link_without_ep_num.replace('?no_redirect=1','')}new?anime_video%5Banime_id%5D=36456&amp;anime_video%5Bepisode%5D=${episode}&amp;anime_video%5Bkind%5D=fandub&amp;anime_video%5Blanguage%5D=russian&amp;anime_video%5Bquality%5D=tv&amp;anime_video%5Bsource%5D=shikimori.org&amp;anime_video%5Bstate%5D=uploaded">
                                <div class="icon"></div>
                                <div class="label">Загрузить</div>
                            </a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
}

function video_variant_template(kinds, i, opt_num, opt, kinds_resolve) {
    return `
        <div class="b-video_variant" id="option-${kinds[i]}-${opt_num}">
            <a class="working" data-remote="true" data-type="html">
                <span class="video-kind russian">${kinds_resolve[kinds[i]]}</span>
                <span class="video-hosting">${opt[0]}</span>
                <span class="video-author">${opt[2]}</span>
            </a>
        </div>`
}

function cc_template() {
    return `<div class="cc">
        <div class="c-videos">
            <div class="title">Варианты видео<div class="video-variant-switcher active" data-kind="fandub">озвучка</div>
                <div class="video-variant-switcher" data-kind="subtitles">субтитры</div>
                <div class="video-variant-switcher" data-kind="raw">оригинал</div>
            </div>
            <div class="video-variant-group active" data-kind="fandub">
            </div>
            <div class="video-variant-group" data-kind="subtitles">
            </div>
            <div class="video-variant-group" data-kind="raw">
            </div>
        </div>
        <div class="c-anime_video_episodes">
            <div class="title" id="episodes-title">Эпизоды</div>
            <div class="b-show_more" style="display: none;">+ показать всё</div>
            <div class="b-show_more-more" style="display: block;">
                <div class="hide-more">— спрятать</div>
            </div>
        </div>
    </div>`
}

function episode_variant_template(data, i) {
    return `
        <div class="b-video_variant" data-episode="${data[0][i][2]}">
            <a id="episode-${data[0][i][2]}">
                <span class="episode-num">#${data[0][i][2]}</span>
                <span class="episode-kinds">${data[0][i][0]}</span>
                <span class="episode-hostings">${data[0][i][1]}</span>
            </a>
        </div>`
}

function upload_link_template(link_without_ep_num, episode) {
    return `${link_without_ep_num}new?anime_video%5Banime_id%5D=36456&amp;anime_video%5Bepisode%5D=${episode}&amp;anime_video%5Bkind%5D=fandub&amp;anime_video%5Blanguage%5D=russian&amp;anime_video%5Bquality%5D=tv&amp;anime_video%5Bsource%5D=shikimori.org&amp;anime_video%5Bstate%5D=uploaded`
}

function start_content_script() {
    if($('.b-link_button.is-licensed').length) {
        console.log('Licensed anime page!')
        let url = location.href.replace('shikimori', 'play.shikimori') + '/video_online?no_redirect=1/'
        if($('.current-episodes').length) {
            url += $('.current-episodes').text()
        }
        else {
            url += '1'
        }
        console.log('URL:', url)
        $('.b-link_button.is-licensed').removeClass('is-licensed disabled').addClass('watch-online').text('Смотреть онлайн').attr('href', url).click(function() {location.href = url})
    }
    else if(location.href.includes('video_online/new?anime_video')) {
        chrome.runtime.sendMessage(JSON.stringify({'action': 'get', 'link': 'https://play.shikimori.org/animes/'+location.href.substring(34, location.href.indexOf('/video_online/'))+'/video_online?no_redirect=1/'}), function(resp) {
            if($(resp).find('.b-errors > .subheadline').text() == 'Просмотр недоступен'){
                console.log('Upload video page!')
                $('form > .subheadline').text($('form > .subheadline').text() + ' (I Heard You Like License)')
                $('.b-button.do-preview').click(function() {
                    $('.create-buttons > .buttons').empty().append($(`<div class="b-button" id="save-button">Работает. Сохранить</div>`))
                    $('#save-button').click(function() {
                        let req = {}
                        req['episode'] = $('#anime_video_episode')[0].value
                        req['name'] = location.href.substring(34, location.href.indexOf('/video_online/'))
                        req['team_title'] = $('#anime_video_author_name')[0].value
                        let types = {'субтитры': 'subtitles', 'оригинал': 'raw', 'озвучка': 'fandub'}
                        req['cc_type'] = types[$('#anime_video_kind option:selected').text()]
                        req['link'] = $('#anime_video_url')[0].value
                        console.log('request:')
                        console.log(req)
                        chrome.runtime.sendMessage(JSON.stringify({'action': 'post', 'link': 'http://licensecrush.ddns.net/add_title/', 'data': req}), function(resp) {
                            resp = JSON.parse(resp)
                            console.log('resp:', resp)
                            if(resp['msg'] !== undefined) {
                                alert(resp['msg'])
                            }
                        })
                    })
                })
            }
        })
    }
    else if(location.href.includes('video_online') && $('.b-errors > .subheadline').length && ($('.b-errors > .subheadline').text() == 'Просмотр недоступен')) {
        console.log('Licensed anime video page!')
        if(location.href.endsWith('/video_online?no_redirect=1')) {
            location.href = location.href + '/1'
        }
        else if(location.href.endsWith('/video_online?no_redirect=1/')) {
            location.href = location.href + '1'
        }
        else if(location.href.endsWith('/video_online?no_redirect=1/0')) {
            location.href = location.href.substr(0, location.href.length - 1) + '1'
        }
        $('.b-errors').remove()
        let split_url = location.href.split('/')
        let name = split_url[split_url.length - 3], episode = split_url[split_url.length - 1]
        chrome.runtime.sendMessage(JSON.stringify({'action': 'get', 'link': 'http://licensecrush.ddns.net/anime_episodes_info/'+name+'/'+episode+'/'}), function(data) {
            console.log(data)
            data = JSON.parse(data)
            if(!data['correct']) {
                console.log('Request is not correct')
            }
            data = data['data']
            console.log(data)
            let link_without_ep_num = location.href.substring(0, location.href.lastIndexOf('/') + 1)
            let player_container = ''
            if(!$.isEmptyObject(data[1]) && (data[1]['fandub'].length + data[1]['subtitles'].length + data[1]['raw'].length)) {
                let kind = ''
                let kinds = ['fandub', 'subtitles', 'raw']
                for(let i in kinds) {
                    if(data[1][kinds[i]].length) {
                        kind = kinds[i]
                        break
                    }
                }
                let video_link = data[1][kind][0][1]
                player_container = player_template(episode, video_link, link_without_ep_num, data)
            }
            else {
                player_container = empty_player_template(episode, link_without_ep_num, data)
            }
            $('.l-content').prepend(player_container)
            $('.c-column.c-control.report').click(function() {$('.cc-anime_video_report-new').show()})
            $('.c-column.c-control.show-options').click(function() {
                if(!$(this).hasClass('selected')) {
                    $('.cc-navigation').hide()
                    $('.cc-optional_controls').show()
                    $('.c-column.c-control.show-options').addClass('selected')
                }
                else {
                    $('.cc-optional_controls').hide()
                    $('.cc-navigation').show()
                    $('.c-column.c-control.show-options').removeClass('selected')
                }
            })
            $('#hide-report').click(function() {$('.cc-anime_video_report-new').hide()})
            let update_ep_info = function(ep_data) {
                let kinds_resolve = {'fandub': 'Озвучка', 'subtitles': 'Субтитры', 'raw': 'Оригинал'}
                for(let i in kinds) {
                    $(`div[data-kind="${kinds[i]}"].video-variant-group`).empty()
                    for(let opt_num in ep_data[kinds[i]]) {
                        let opt = ep_data[kinds[i]][opt_num]
                        $(`div[data-kind="${kinds[i]}"].video-variant-group`).append($(video_variant_template(kinds, i, opt_num, opt, kinds_resolve)))
                        $(`#option-${kinds[i]}-${opt_num}`).click(function() {
                            if($('#player-iframe').length) {
                                $('#player-iframe').attr('src', opt[1])
                            }
                            else {
                                $('.player-area').empty().append($(`
                                    <iframe src="${opt[1]}" id="player-iframe" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no" allowfullscreen="allowfullscreen" style="height: ${$(window).height()/2}px;"></iframe></div>
                                    `))
                                $('.video-link.no-video').remove()
                            }
                            for(let j in kinds) {
                                $(`div[data-kind="${kinds[j]}"].video-variant-group`).children().each(function() {$(this).removeClass('active')})
                            }
                            $(this).addClass('active')
                        })
                    }
                }
            }

            let goto_episode = function(episode_num) {
                episode = episode_num
                /*let episodes_num = $('span.episode-num').length
                console.log('episodes_num', episodes_num, 'episode', episode)
                if(episode == 0) {
                    episode = episodes_num
                }
                else if(episode >= episodes_num + 1) {
                    episode = 1
                }*/
                episode = episode.toString()
                last_studio = $('.video-variant-group .b-video_variant.active .video-author').text()
                console.log('Выбранный перевод',last_studio , $('.video-variant-group.active .b-video_variant.active .video-author'))
                window.history.pushState(`episode-${episode}`, `Эпизод ${episode} / I heard you like license`, link_without_ep_num.substring(26) + episode)
                $('.c-control.episode-num > input').attr('value', episode)
                $('.c-control.upload').attr('href', upload_link_template(link_without_ep_num, episode))

                // set new html title
                document.title = document.title.replace(/\d+/i, episode)

                chrome.runtime.sendMessage(JSON.stringify({'action': 'get', 'link': 'http://licensecrush.ddns.net/anime_episode_info/'+name+'/'+episode+'/'}), function(ep_data) {
                //$.get('http://licensecrush.ddns.net/anime_episode_info/'+name+'/'+episode+'/', function(ep_data) {
                    ep_data = JSON.parse(ep_data)
                    if(ep_data['correct']) {
                        console.log('episode ' + episode + 'data:')
                        console.log(ep_data['data'])
                        update_ep_info(ep_data['data'])
                        try {
                            $('.c-anime_video_episodes .b-video_variant.active').removeClass('active')
                            $(`.b-video_variant[data-episode="${episode}"]`).addClass('active')
                        }
                        catch (e) {
                            console.log(`Episode ${episode} not found`)
                        }
                        auto_video_click()
                    }
                    update_watch_button(name,episode)
                })
            }

            $('.c-control.prev').click(function() {goto_episode(parseInt(episode) - 1)})
            $('.c-control.next').click(function() {goto_episode(parseInt(episode) + 1)})
            let cc = $(cc_template())
            console.log('Writing cc...')
            $('.player-container').after(cc)
            let kinds = ['fandub', 'subtitles', 'raw']
            let set_active_var_switcher = function(kind) {
                for(let i in kinds) {
                    $(`div[data-kind="${kinds[i]}"].video-variant-switcher`).removeClass('active')
                    $(`div[data-kind="${kinds[i]}"].video-variant-group`).removeClass('active')
                }
                $(`div[data-kind="${kind}"].video-variant-switcher`).addClass('active')
                $(`div[data-kind="${kind}"].video-variant-group`).addClass('active')
            }
            for(let i in kinds) {
                $(`div[data-kind="${kinds[i]}"].video-variant-switcher`).click(function() {set_active_var_switcher(kinds[i])})
            }
            console.log('Done!')
            for(let i = data[0].length - 1; i >= 0; i--) {
                $('#episodes-title').after($(episode_variant_template(data, i)))
                $(`#episode-${data[0][i][2]}`).click(function() {
                    $('div.c-anime_video_episodes > .b-video_variant.active').each(function() {$(this).removeClass('active')})
                    goto_episode(data[0][i][2])
                    $(this).parent().addClass('active')
                })
            }
            update_ep_info(data[1])
            $('.video-variant-group.active :first-child').addClass('active')
            try {
                $(`.b-video_variant[data-episode="${episode}"]`).addClass('active')
            }
            catch (e) {
                console.log(`Episode ${episode} not found`)
            }
            update_watch_button(name,episode)

        });

    }
}

function start_watching_form(user_id,title_name) {
    return `
    <form action="/api/v2/user_rates" data-method="POST" data-remote="true" data-type="json">
    <input type="hidden" name="frontend" value="1">
    <input type="hidden" name="user_rate[user_id]" value="${user_id}">
    <input type="hidden" name="user_rate[target_id]" value="${parseInt(title_name)}">
    <input type="hidden" name="user_rate[target_type]" value="Anime">
    <input type="hidden" name="user_rate[status]" value="planned">
    <input type="submit" id="click" hidden="">
    </form>`

}

jQuery.expr[':'].icontains = function(a, i, m) {
    return jQuery(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0;
};

function auto_video_click(error_count) {
        last_studio = last_studio.replace(/ .*/,'')
        var video = $(`.video-author:icontains("${last_studio}")`)
    try {
        video[0].click()
        $(`.video-variant-switcher[data-kind="${video.closest('.video-variant-group').attr('data-kind')}"]`).click()
    }
    catch (e) {
            if(error_count == undefined) {
                console.log('Error: video not found')
                last_studio = ''
                auto_video_click(1)
            } else {
                console.log('Error')
            }
    }
}

/*Основная функция, отвечающая за работу кнопки, передаем имя тайтла и выбранный эпизод */
function update_watch_button(title_name, current_episode) {
    console.log(title_name)
    chrome.runtime.sendMessage(JSON.stringify({'action': 'get', 'link': 'https://shikimori.org/api/animes/'+parseInt(title_name)+'/'}), function(data) {
        /*
        Получаем похожий "user_rate":{"id":43643249,"score":0,"status":"watching","text":"","episodes":10,"chapters":null,"volumes":null,"text_html":"","rewatches":0}
        Нас интересуют id и episodes
        */
        //var user_rate = JSON.parse(data).user_rate
        var user_rate = data.user_rate
        console.log(user_rate)
        /*
        Если пришел пустой user_rate, значит тайтла у пользователя не было в списках,
        необходимо с имитировать кнопку "Добавить в список", для этого пришлось прибегнуть к костылю,
        ибо OAuth2 со своими токенами
        */
        if(user_rate == null) {
           var user_id = JSON.parse($('body.p-anime_videos').attr('data-user')).id
            if(user_id!=null) {
                $('body.p-anime_videos').append(start_watching_form(user_id,title_name))
                $('#click').click();
                update_watch_button(title_name,current_episode);
            }
        }else {
            /*
        Так как обновление количества просмотренных эпизодов сделано на основе псевдо patch запроса, нужно проверить,
        чтобы серия, которую смотрит пользователь была не просмотрена ранее.
        */
            if(user_rate.episodes < current_episode) {
                $('div.c-column.c-control.increment-user_rate').removeClass('watched')
                $('div.c-column.c-control.increment-user_rate').on('click', function () {
                    watched(current_episode,user_rate.id,title_name);
                })
            }
            else {
                $('div.c-column.c-control.increment-user_rate').addClass('watched')
                $('div.c-column.c-control.increment-user_rate').off('click')
            }
        }

    });
}

function watched(watched_ep, id, title_name) {
    chrome.runtime.sendMessage(JSON.stringify({'action': 'get', 'link': 'https://shikimori.org/user_rates/'+id+'/edit'}), function(data) {
        let result = $(data)
        var token = result.find('[name="authenticity_token"]').attr('value');
        var csrf_token = result.find('[name="csrf-token"]').attr('content');
        console.log(token, csrf_token)
        var _data = {}
        _data['utf8'] = '✓';
        _data['_method'] = 'patch';
        _data['authenticity_token'] = token;
        _data['user_rate[episodes]'] = watched_ep;
        $.post({
            url:'/api/v2/user_rates/'+id+'',
            data: $.param(_data),
            headers: {
                'content-type':'application/x-www-form-urlencoded; charset=UTF-8',
                'csrf-token':token,
                'x-requested-with':'XMLHttpRequest'
            },
            success: function (response) {
                if(response.episodes == watched_ep){
                    update_watch_button(title_name,watched_ep);

                }
            },
            error: function () {
                console.log('Error')
            }
        })
    });
}

$(document).ready(function() {
    chrome.runtime.onMessage.addListener(function(req, sender, sendResponse) {
        console.log('listener triggered!', req)
        if(req.is_content_script) {
            start_content_script()
            sendResponse({is_content_script: true})
        }
    });
    console.log('Justice here!')
});
