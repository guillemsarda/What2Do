//
//  SignUpView.swift
//  what2do
//
//  Created by Guillem Sardà Parreu on 27/8/24.
//

import SwiftUI

struct FormEntries {
    var name: String = ""
    var surname: String = ""
    var type: String = ""
    var email: String = ""
    var password: String = ""
}

struct SignUpView: View {
    @State private var form = FormEntries()
    private var apiService: ApiService
    
    init() {
        self.apiService = ApiService()
    }
    
    var body: some View {
        WithHeaderView(translationKey: "signMeUp", hasArrow: true) {
            VStack {
                Text("name")
                    .frame(width: 250, alignment: .leading)
                TextField("name", text: $form.name)
                    .padding(.vertical, 5)
                    .padding(EdgeInsets(top: 0, leading: 6, bottom: 0, trailing: 6))
                    .background(.white)
                    .frame(width: 250)
                    .cornerRadius(5)
                    .padding(.bottom, 10)
                Text("surname")
                    .frame(width: 250, alignment: .leading)
                TextField("surname", text: $form.surname)
                    .padding(.vertical, 5)
                    .padding(EdgeInsets(top: 0, leading: 6, bottom: 0, trailing: 6))
                    .background(.white)
                    .frame(width: 250)
                    .cornerRadius(5)
                    .padding(.bottom, 10)
                Text("Type")
                    .frame(width: 250, alignment: .leading)
                Picker("typePlaceholder", selection: $form.type) {
                    Text("firm").tag("firm")
                    Text("personal").tag("personal")
                }
                .pickerStyle(.segmented)
                .padding(.vertical, 5)
                .padding(EdgeInsets(top: 0, leading: 6, bottom: 0, trailing: 6))
                .frame(width: 250)
                .cornerRadius(5)
                .padding(.bottom, 10)
                Text("email")
                    .frame(width: 250, alignment: .leading)
                TextField("email", text: $form.email)
                    .padding(.vertical, 5)
                    .padding(EdgeInsets(top: 0, leading: 6, bottom: 0, trailing: 6))
                    .background(.white)
                    .frame(width: 250)
                    .cornerRadius(5)
                    .padding(.bottom, 10)
                Text("password")
                    .frame(width: 250, alignment: .leading)
                SecureField("password", text: $form.password)
                    .padding(.vertical, 5)
                    .padding(EdgeInsets(top: 0, leading: 6, bottom: 0, trailing: 6))
                    .background(.white)
                    .frame(width: 250)
                    .cornerRadius(5)
                    .padding(.bottom, 10)
                CustomButton<HomeView>(translationKey: "signUp", color: Color("ElectricBlue"), destination: HomeView(), isSmall: true, onPress: {
                    Task {
                        let test: [Event] = await self.apiService.getPrivateEvents()
                    }
                })
            }
            .padding(.vertical, 30)
            .frame(minWidth: /*@START_MENU_TOKEN@*/0/*@END_MENU_TOKEN@*/, maxWidth: 300, minHeight: 0, alignment: .center)
            .background(Color("SeaBlue"))
            .cornerRadius(20)
        }
    }
}


#Preview {
    SignUpView()
}
