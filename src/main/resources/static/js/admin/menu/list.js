

Vue
.createApp(
{
		
	data(){
		return {
			test:"hello"
		};
	
	},
	methods:{
		 categoryClickHandler(e){

		this.load(2);

		},
		load(cid){
			let promise = fetch("/menus");
			promise
			.then(response=>{
				return response.json();
			})
			.then(list=>{
				return list[1];
			})
			.then(menu=>{
				console.log(menu.name);
			})
			.catch(error=>{
				console.log("aaaa");
			});
		
		
		
		
//		----------------프로미스방식2---------------------
//		load(cid){
//			let promise = fetch("/menus");
//			promise
//			.then(response=>{
//				let promise = response.json();
//				promise.then(list=>{
//					console.log(list);
//				});
//			});
//		-----------------프로미스방식1----------------------------
//		//비동기->동기형으로 바꾸는 방식
//		async load(cid){
//			
//			let response = await fetch("/menus");
//			let list = await response.json();
//			console.log(list);
//		-----------------콜백방식---------------------------
//			return new Promise(resolve=>{
//			//콜백함수를 사용하는 request 객체의 send();
//			//일정한시간 뒤에 처리하게하는 함수. 그동안 비동기처리해줌
//			setTimeout(()=>{
//				console.log("load");
//				callback();
//			},100);
//		});
		
		
		
		
		
		}
	}
	
	
})
.mount("#main-section");