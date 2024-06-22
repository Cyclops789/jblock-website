import React from 'react';

interface IRules {
  title: string;
  subRules: string[];
}

const rules: IRules[] = [
  {
    title: 'Server General Rules',
    subRules: [
      'Respect all players',
      'No spamming or advertising',
      'No cheating, exploiting, or macros',
      'No offensive or inappropriate content',
      'No ghosting, except if delaying',
      'Admin discretion applies to rule issues',
    ]
  },
  {
    title: 'Jailbreak Rules',
    subRules: [
      'Follow warden’s commands',
      'Freedays on the first day only',
      'Last warden orders last 5 seconds after death',
      '“Frozen” means no moving; “AFK Frozen” means no movement at all for 30 seconds',
      'LR must be possible by 0:00, or CT slay day',
      'Don’t delay the game or talk over the warden',
    ]
  },
  {
    title: 'Terrorist Team Rules',
    subRules: [
      'Follow orders; no detours or delays',
      'Thrown grenades are KOS',
      'You can kill baiting CTs',
      'Using or knifing secrets makes you a rebel',
      'Stay in cells until opened by the warden',
      'Ask for repeats promptly',
      'Unholstered guns are KOS',
      'Last 2 non-rebelling Ts can initiate LR',
    ]
  },
  {
    title: 'Counter-Terrorist Team Rules',
    subRules: [
      'Mic players take priority',
      'Give clear orders; no wordplay',
      'Leave armory by 6:30; cells must open by 6:00',
      'Warn delaying Ts; no warning shots for rebels',
      'No in-cell orders',
      'No baiting',
      'Don’t camp or block secrets',
      'No gunplanting',
      'Can only break secrets to leave secrets',
      'Use the same secret as rebelling Ts',
      'No teamkilling or favoritism',
    ]
  },
  {
    title: 'Warden Rules',
    subRules: [
      'Give repeats when asked',
      'No picking off Ts for a quick round',
      'Open cell doors',
      'Only warden can pardon rebels',
    ]
  },
  {
    title: 'Warday Rules',
    subRules: [
      'Kill Ts following CTs into warday',
      'Warday expands at 5:00; CTs must leave by 3:00',
      'No !lr on wardays',
    ]
  },
  {
    title: 'Special Day Rules',
    subRules: [
      'Participate or be slayed',
    ]
  },
]

function JBRules() {
  return (
    <React.Fragment>
      <div
        style={{
          fontFamily: '"Sedgwick Ave", cursive',
          fontWeight: 400,
          fontStyle: 'normal',
        }}
        className='mt-[100px] bg-black w-screen flex justify-center'
      >
        <div className="w-full px-2 sm:px-0 sm:w-[calc(100%-280px)] grid grid-cols-1 md:grid-cols-2 gap-4 justify-between">

          {rules.map((rule) => (
            <div key={rule.title} className='border-2 border-primary rounded-lg min-h-[80px]'>
              <div className='pt-1 bg-primary text-black text-xl text-center h-[35px]'>{rule.title}</div>
              <div
                className='my-1 px-1 text-start items-center h-full text-white'
              >
                {rule.subRules.map((subRule) => (
                  <div className='tracking-[1px] text-[20px]' key={subRule}>- {subRule}</div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </React.Fragment>
  )
}

export default JBRules;