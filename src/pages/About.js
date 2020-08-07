import React from 'react';
import Logo from '../comonents/Logo';

const About = ({location, match}) => {
    return (
        <div class="about">
            <Logo></Logo>
            <div class="row">
                <div class="col-12 title">
                    <span class="d-block">소개</span>
                </div>
                
                <div class="col-12">
                    <div class="bg shadow"></div>
                    <img class="shadow" src={ require('../image/profile.jpg') } alt="img"/>    
                </div>
                
                <div class="col-12 mt-3">
                    <span class="d-block">이무현   Moohyun Lee</span>
                    <span class="d-block">dvmoomoodv@gmail.com</span>
                    <span class="d-block">010-8726-4345</span>
                    <span class="d-block">@dvmoomoodv</span>
                </div>
            </div>

            <div class="row">
                <div class="col-12 title sub">
                    학교
                </div>
                <div class="col-12">
                    <span class="d-block date">
                    2008.03 
~ 2015.02
                    </span>
                    <span class="d-block">
                    성공회대학교 (서울) 소프트웨어공학
졸업 3.85 / 4.5                    
                    </span>           
                    <span class="d-block date">
                    2005.03 
~ 2008.02
                    </span>
                    <span class="d-block">
                    문산고등학교
이과계열 졸업                    
                    </span>
	
	
                </div>
            </div>
          

            <div class="row">
                <div class="col-12 title sub">
                    군대
                </div>
                <div class="col-12">
                    <span class="d-block date">
                2010.02~ 2011.11
                    </span>
                    <span class="d-block">
                    군필(육군병장 만기제대)
소프트웨어개발병 (1713.B7 - 현:175262)      
                    </span> 
               	
                </div>
            </div>

            <div class="row">
                <div class="col-12 title sub">
                    외부활동
                </div>
                <div class="col-12">
                <span class="d-block date">
                2019.10.11 
~ 2019.10.12
                    </span>
                    <span class="d-block">
                    해커톤
                    <p>
                    월컴투 메이커톤 3회 
미래상
주최 : 탈환   
                        </p>
                    </span> 
                

                    <span class="d-block">
                    2008.04
~ 2009.04
                    </span>
                    <span class="d-block">
                    교내활동 
                    <p>성공회대 교육방송국
                    엔지니어, 수습기자
                        </p>

                    </span> 



                    <span class="d-block date">
                    2009.05
~ 2010.01
                    </span>
                    <span class="d-block">
                    교내활동<p>
                    성공회대 프로그램개발 소모임
학교 프로그램 개발및 소모임내 교육활동
                        </p>
                    </span>

                    <span class="d-block date">
                    2016.10
~ 2016.12
                    </span>
                    <span class="d-block">
                    교육이수내역
                    
                    <p>

                    SBS아카데미컴퓨터아트3D영상학원

드로잉아트 : 메쉬툴을 이용한 디테일과정/ 컬러링 기법과 수채화풀의 연출/ 컨셉디자인(SF)/ 실무예제 적용

웹디자인 : HTML5 기본 및 태그/ HTML5 + CSS3/ CSS3 고급 기능/ 반응형 웹사이트
                    </p>
                    </span>

	
                </div>
            </div>


            <div class="row">
                <div class="col-12 title sub">
                    자기소개서
                </div>
                <div class="col-12">
                    <span class="d-block">주요경력/
업무강점 등</span>
<p>
저는 웹에 대해서 다양한 부분을 경험하고 익히는것을 좋아합니다. 기획부터 디자인 퍼블리싱에서 개발, 서버에 이어 인프라까지 웹서비스의 다양한 부분의 경험을 하기위해 노력해왔습니다. 그 결과 스타트업 창업멤버로 투입하여 현재 서울대에서 쓰이는 프로그램을 처음부터 끝까지 참여하여 개발했고, 그 이후 팀의 중책을 맡으며 프로젝트를 이끌어왔습니다. 다양한부분의 경험으로 업무로써의 대화를 유연하게 마무리 지을수있는 강점이 있습니다.
</p>
                
<span class="d-block">성장과정</span>
<p>
초등학교때부터 컴퓨터와 기계에 관심이 많아 학교에서 방송부와 전산부를 초,중,고,대학교까지 지원하여 학교생활을 하였고, 부모님께서 제가 하고자 하는일에 대해선 믿음으로 지원해주셔서 제 관심이 흥미가되고, 직업으로까지 연결될수있는 힘이 되었습니다. 부모님께는 낯설은 직업일지라도 들어주시고 이해해주시고, 필요한것들을 지원해주셔서 이 직업을 계속 이어서 할 수 있게 되었습니다. 
</p>


<span class="d-block">성격의 장, 단점</span>
<p>
저는 예민한 성격을 가지고있습니다. 어느 상황마다 예민하여 업무를 진행하면서 놓치는 일이 적은편입니다. 일이 맡겨지면 그 일에 대해서 분석하고 문제점도 스스로 파악하여 해결하는 편이고, 단점 또한 장점의 성격으로 인해 일이 늦춰지는 일이 종종 발생하곤 합니다. 하나하나 분석하면서 진행하다 보니 일이 늦춰질때가 있으나 분석이 잘 되었을 경우에는 어느 누구보다 빨리 일을 완료할 수 있습니다.
</p>

	

                </div>
            </div>
        </div>
    );
};

export default About;