import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'air.tv.douyu.android',
  name: '斗鱼',
  groups: [
    {
      key: 3,
      name: '局部广告-直播间广告',
      activityIds: [
        'tv.douyu.view.activity.PlayerActivity',
        'com.douyu.module.player.p.rambobase.RamboPlayerActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            'ImageView < ViewGroup + @ViewGroup[childCount=1][clickable=true] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/12892825',
            'https://i.gkd.li/i/13037239', //添加childCount=1避免"全屏播放-设置"误触
            'https://i.gkd.li/i/14692807', //clickable=true防止在此页面误触
          ],
        },
        {
          key: 1,
          matches: 'ViewPager[childCount=3] + @View + ImageView + View',
          snapshotUrls: 'https://i.gkd.li/i/12892825',
        },
        {
          key: 2,
          matches:
            'RelativeLayout[childCount=3] > ViewPager + @View + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13056107',
        },
        {
          key: 3,
          matches:
            'ViewGroup[childCount=4] > View + ImageView + FrameLayout + ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13056107',
        },
        {
          key: 4,
          matches:
            'FrameLayout[childCount=2] > @ImageView - FrameLayout > RelativeLayout > WebView',
          snapshotUrls: 'https://i.gkd.li/i/13056107',
        },
        {
          key: 5,
          matches:
            'ViewGroup[childCount=8] > ViewGroup[index=5] >4 RelativeLayout[visibleToUser=true] > ImageView[clickable=true][index=1]',
          snapshotUrls: [
            'https://i.gkd.li/i/13948990',
            'https://i.gkd.li/i/14310474', // 避免在此页面误触
          ],
        },
        {
          key: 6,
          matches:
            '[id="android:id/content"] > RelativeLayout >4 FrameLayout + ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/14668232',
            'https://i.gkd.li/i/14668248',
            'https://i.gkd.li/i/14667860',
          ],
        },
        {
          key: 7,
          fastQuery: true,
          matches: '@ImageView[visibleToUser=true] -2 * >3 [text="推荐"]',
          snapshotUrls: 'https://i.gkd.li/i/14668232',
        },
        {
          key: 8,
          fastQuery: true,
          matches:
            '@ImageView[clickable=true][visibleToUser=true] + ViewGroup >2 [text="广告"]',
          exampleUrls: 'https://e.gkd.li/cfd83f2b-580d-4659-8966-eb5f4fe21ecd',
          snapshotUrls: 'https://i.gkd.li/i/16939767',
        },
        {
          key: 9,
          matches:
            '@ImageView[clickable=true][visibleToUser=true] - RelativeLayout > RelativeLayout > RelativeLayout[childCount=2] > ViewPager[childCount=2] > FrameLayout[childCount=1][id=null] >3 ImageView[childCount=0][id=null][text=null]',
          exampleUrls: 'https://e.gkd.li/cfd83f2b-580d-4659-8966-eb5f4fe21ecd',
          snapshotUrls: 'https://i.gkd.li/i/16939767',
        },
      ],
    },
  ],
});
